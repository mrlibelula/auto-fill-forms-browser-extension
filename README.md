# Libe.dev AutoFill Forms Extension

A browser extension that automatically fills login forms with predefined credentials. Perfect for development and testing environments.

## Features

- 🚀 Automatic form detection and filling
- 🔒 Secure credential storage using browser's built-in storage API
- ⚡ Works with dynamically loaded forms
- 🎯 Configurable through an easy-to-use popup interface
- 🛠️ Perfect for development and testing environments

## Browser Compatibility

This extension works on all Chromium-based browsers:
- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Brave
- ✅ Opera
- ✅ Vivaldi

## Installation Instructions

### Local Development Installation

1. Clone this repository:

```bash
git clone https://github.com/mrlibelula/auto-fill-forms-browser-extension.git
```

2. Open your browser's extension page:
   - **Chrome**: Navigate to `chrome://extensions/`
   - **Brave**: Navigate to `brave://extensions/`
   - **Edge**: Navigate to `edge://extensions/`
   - **Opera**: Navigate to `opera://extensions/`

3. Enable "Developer mode" (usually a toggle in the top-right corner)

4. Click "Load unpacked" and select the extension directory

### Installation Verification
1. After installation, you should see the extension icon in your browser's toolbar
2. Default credentials will be set to:
   - Email: luis@libe.dev
   - Password: password

## Usage

### Basic Usage
1. Navigate to your login page (default configured for https://music.test/*)
2. The form should auto-fill with your predefined credentials

### Changing Credentials
1. Click the extension icon in your browser toolbar
2. Enter new credentials in the popup form
3. Click "Save"
4. New credentials will be used for future auto-fills

## Configuration

### Manifest Permissions
The extension requires the following permissions:
- `activeTab`: To interact with the current tab
- `storage`: To save your credentials
- `scripting`: To inject the auto-fill script

### URL Patterns
By default, the extension works on:

```
https://music.test/
```

To modify the URL pattern:
1. Edit the `matches` array in `manifest.json`
2. Reload the extension

## Development

### Project Structure

```
├── manifest.json
├── background.js
├── content.js
├── popup.html
└── popup.js
```

### Key Files
- `manifest.json`: Extension configuration
- `background.js`: Background service worker
- `content.js`: Form detection and filling logic
- `popup.html/js`: Settings interface

## Security Considerations

⚠️ **Important Notes:**
- This extension is intended for development/testing environments
- Credentials are stored in the browser's sync storage
- Do not use with production credentials
- Only use on trusted development domains

## Troubleshooting

If the extension isn't working:

1. Verify Installation
   - Check if the extension is enabled in your browser
   - Look for any console errors

2. Check Permissions
   - Ensure the extension has required permissions
   - Domain should match the pattern in manifest.json

3. Form Detection Issues
   - Verify form field IDs/selectors match your page
   - Check if form loads dynamically

4. Storage Issues
   - Check stored data via extension popup
   - Try resetting extension data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.

---

Made with 🧠 by [Libe.dev](https://libe.dev)

