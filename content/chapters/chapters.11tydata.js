export default {
  layout: "layouts/chapter.njk",
  // Newest-first feed order: a chapter's date is its last git commit.
  // A `date:` in a chapter's own front matter overrides this.
  date: "git Last Modified"
}
