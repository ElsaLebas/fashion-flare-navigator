# Smart Faceting Attributes Fashion Demo

## Solution
We propose creating a wrapper around Algolia's Transformation feature, integrating an LLM model to dynamically generate new facets based on user-defined facet names and values. This solution offers a no-code UI, allowing users to define facet criteria and apply optional filters to scope transformations efficiently. Key features include dynamic facet generation, flexible filtering for selective enrichment, and seamless integration with Algolia’s existing index structure.

## About the demo
The demo store allows you to navigate through occasions (values generated by our `Smart Faceting Attributes` feature that uses data transformations behind the scenes) so you can find clothes for a wedding, a formal evening, a date night...
You can also use the `occasion` facet on standard category pages (Men, Women, Accessories) to refine results.

## What technologies are used for this project?

We've decided to use a no-code AI tool, [Lovable](https://lovable.dev/) to help us building the prototype. It generated a solid ecommerce base on which we've implemented Algolia InstantSearch on top to populate the collection pages.

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Algolia + React InstantSearch

## Link to the demo store

[Click here](https://preview--fashion-flare-navigator.lovable.app/)

## Lovable Project Link

[Click here](https://lovable.dev/projects/58ac25d5-d7b5-4551-a253-5473a7234333)
