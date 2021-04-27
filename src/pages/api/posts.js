// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method === 'GET') {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIR_TABLE_BASE_ID}/Posts`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIR_TABLE_API_KEY}`,
        },
      }
    )
    const { records } = await response.json()

    const posts = records.map((record) => {
      return {
        id: record.id,
        ...record.fields,
      }
    })

    res.status(200).json({ posts })

    return
  }

  if (req.method === 'POST') {
    const { authorization } = req.headers

    const auth = await fetch(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/user`, {
      headers: {
        Authorization: authorization,
      },
    })

    const authJson = await auth.json()

    if (!authJson.id) {
      res.status(404).json({
        error: 'Invalid token',
      })
      return
    }

    const { data: { content } = {} } = JSON.parse(req.body)

    const data = {
      records: [
        {
          fields: {
            content,
            date: new Date().toISOString(),
          },
        },
      ],
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIR_TABLE_BASE_ID}/Posts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIR_TABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    res.status(201).json({ response })
  }
}
