# Libe.dev AutoFill Forms

A lightweight Chromium extension (Manifest V3) that automatically fills login forms with per-site credentials. Built for local development and testing environments where you log into the same `.test` hosts over and over.

## Features

- Automatic detection and filling of `email` / `password` fields
- Per-host credentials — different logins for different sites
- Works with dynamically rendered forms via a `MutationObserver`
- Credentials sourced from environment variables at build time
- Zero runtime dependencies — plain JS bundled with webpack
- Popup UI for saving credentials on the fly

## Browser Compatibility

Works on all Chromium-based browsers:

- Google Chrome
- Microsoft Edge
- Brave
- Opera
- Vivaldi

## How It Works

1. `background.js` seeds a per-host credential map into `chrome.storage.sync` on install.
2. `content.js` runs on matched pages, resolves the current host, looks up its credentials, and fills the `email` and `password` inputs.
3. A `MutationObserver` (plus a fallback timeout) handles forms that load asynchronously.
4. `popup.html` / `popup.js` provide a small settings form to update stored credentials.

Credential values come from a `.env` file at build time (via `dotenv-webpack`), so no secrets are hard-coded in the shipped bundle.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure credentials

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

```env
# Default credentials
VITE_DEFAULT_EMAIL=your-default@email.com
VITE_DEFAULT_PASSWORD=your-password

# LibeSoft credentials
VITE_LIBESOFT_EMAIL=your-libesoft@email.com
VITE_LIBESOFT_PASSWORD=your-libesoft-password
```

> Never commit your real `.env`. Only `.env.example` (with placeholders) belongs in version control.

### 3. Build the extension

```bash
npm run build      # production build into dist/
npm run dev        # development build with watch mode
```

The build outputs `background.bundle.js`, `content.bundle.js`, and `popup.bundle.js` into a `dist/` folder, along with the copied `manifest.json`, `popup.html`, and icon.

### 4. Load it in your browser

1. Open your browser's extension page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Brave: `brave://extensions/`
   - Opera: `opera://extensions/`
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select the `dist/` directory.
4. The extension icon appears in your toolbar.

## Configuration

### Target sites

The list of sites the extension runs on is defined in two places in `manifest.json`:

- `host_permissions` — grants access to the listed hosts
- `content_scripts.matches` — controls where `content.js` is injected

Per-host credential mappings live in `background.js` (seeded into storage) and `config.js`. To add a new site:

1. Add the URL pattern to `host_permissions` and `matches` in `manifest.json`.
2. Add a matching host entry to the credentials map in `background.js`.
3. Rebuild (`npm run build`) and reload the extension.

### Permissions

| Permission  | Purpose                                |
| ----------- | -------------------------------------- |
| `activeTab` | Interact with the current tab          |
| `storage`   | Persist credentials via `storage.sync` |
| `scripting` | Inject the auto-fill logic             |

## Project Structure

```
├── manifest.json        # MV3 extension manifest
├── background.js        # Service worker — seeds credentials into storage
├── content.js           # Detects and fills login forms
├── popup.html           # Settings UI markup
├── popup.js             # Settings UI logic
├── config.js            # Host → credential mapping
├── webpack.config.js    # Bundling + env injection + asset copy
├── package.json
├── .env.example         # Environment variable template
└── dist/                # Build output (load this in the browser)
```

## Development

1. Make changes in the root source files (`background.js`, `content.js`, `popup.js`, etc.).
2. Run `npm run dev` to rebuild on save, or `npm run build` for a one-off production build.
3. Reload the extension from your browser's extensions page to pick up the changes.

## Security Notes

- Intended strictly for **development and testing** environments.
- Credentials are stored in the browser's `storage.sync`.
- Do not use with production or sensitive credentials.
- Only enable it on trusted local domains.

## Troubleshooting

- **Form not filling** — confirm the site matches a pattern in `manifest.json` and that the form uses standard `email` / `password` input selectors.
- **Wrong credentials** — check the host key in `background.js` matches the site's exact `host` (including port).
- **Nothing loads** — verify the extension is enabled and check the service worker / page console for errors.
- **Dynamic forms** — the `MutationObserver` and 1s fallback should cover most cases; increase the timeout in `content.js` if a form renders very late.

## License

Released under the MIT License.

---

Made with 🧠 by [Libe.dev](https://libe.dev)
