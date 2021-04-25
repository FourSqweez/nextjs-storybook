export async function getAllPosts(){
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
      )
      const { posts } = await response.json()
      return posts
}