// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
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
}
