export async function load({ data }) {
  // Use the filename (with date prefix) to import the correct markdown file
  const component = await import(`../../../posts/${data.post.filename}.md`)

  return {
    post: data.post,
    component: component.default
  }
}

