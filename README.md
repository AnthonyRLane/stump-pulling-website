# Jim's Stump Pulling Website

A dependency-free static marketing site for a custom-built stump pulling service.

## Preview locally

Run `python3 -m http.server 8080` in this directory, then visit `http://localhost:8080`.

## Deploy

The production domain is `https://stumppulling.com`. The project can be served directly by Azure App Service without a build step.

## SEO structure

- The homepage, three service pages, and three county pages each have unique titles, descriptions, canonical URLs, social metadata, and structured data.
- `robots.txt` points search engines to `sitemap.xml`.
- New public pages must be added to `sitemap.xml` and linked from an existing page.
- Keep business name and phone details consistent with the Google Business Profile.

## Before production

Confirm cleanup/backfill terms. Quote links are prefilled SMS messages to `(206) 549-4123`.
