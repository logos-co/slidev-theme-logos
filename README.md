# slidev-theme-logos

[![NPM version](https://img.shields.io/npm/v/@logos-co/slidev-theme-logos)](https://www.npmjs.com/package/@logos-co/slidev-theme-logos)

Logos brand theme for [Slidev](https://sli.dev).

## Install

```bash
npm i -D @logos-co/slidev-theme-logos
```

## Usage

Set the theme in your slides frontmatter:

```yaml
---
theme: '@logos-co/slidev-theme-logos'
---
```

## Layouts

| Layout | Description | Slots | Frontmatter |
|---|---|---|---|
| `cover` | Title/cover slide with logo, date, and event info | — | `title`, `date`, `description`, `event`, `comment` |
| `default` | Standard content slide with padding | `default` | — |
| `center` | Centered content — demos, key statements, large visuals | `default` | — |
| `header` | Full-width header area with its own footer bar | `default` | `hidePageNumber` |
| `two-cols` | Header area + two equal columns | `default` (header), `::left::`, `::right::` | — |
| `three-column` | Header + three equal columns | `::header::`, `::left::`, `::center::`, `::right::` | — |
| `panel` | Main content left, side panel right | `default` (left), `::panel::` | — |
| `two-panels` | Main content left, two side-by-side panels right | `default` (left), `::panel-1::`, `::panel-2::` | — |
| `purpose` | Header area + two equal columns below | `default` (header), `::left::`, `::right::` | — |
| `steps` | Auto-numbered columns (01–06) based on filled slots | `::s1::` through `::s6::` | — |
| `end` | Closing slide with centered Logos logo | `default` | — |

## Global Footer

Every slide gets a footer with "Logos.co" and a page number. Control it via frontmatter:

- `footer: false` — hide the entire footer
- `hidePageNumber: true` — hide only the page number

## Design Tokens

- **Background:** warm gray (`#E8E5E1`)
- **Text:** forest (`#1B3428`)
- **Accent:** coral (`#FF6B35`)
- **Heading font:** Times
- **Display font:** Gowun Batang
- **Code font:** JetBrains Mono
- **Body font:** Inter (Slidev default)
