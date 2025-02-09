# Rami Levy MCP Server

[![smithery badge](https://smithery.ai/badge/@shilomagen/rami-levy-mcp)](https://smithery.ai/server/@shilomagen/rami-levy-mcp)

MCP Server for the Rami Levy Online Grocery Store API. This is a proof of concept implementation that demonstrates how to integrate Rami Levy's e-commerce platform with MCP-enabled LLMs.

## Tools

1. `search_items`
   - Search for products in Rami Levy's catalog
   - Inputs:
     - `q` (string): Search query
     - `store` (string, optional): Store identifier (default: "331")
     - `aggs` (number, optional): Aggregation flag (default: 1)
   - Returns: Array of products with name, price, image URL, and ID

2. `add_to_cart`
   - Add one or more items to the shopping cart
   - Inputs:
     - `store` (string): Store identifier (e.g., "331")
     - `items` (array): List of items to add, each containing:
       - `id` (number): Product identifier
       - `quantity` (number): Quantity to add (minimum: 1)
   - Returns: Updated cart contents with prices and discounts

3. `remove_from_cart`
   - Remove items from the cart by providing an updated list of items to keep
   - Inputs:
     - `store` (string): Store identifier
     - `items` (array): Updated list of items to keep in cart
   - Returns: Updated cart contents

4. `update_quantity`
   - Update the quantity of an item in the cart
   - Inputs:
     - `store` (string): Store identifier
     - `id` (number): Product identifier
     - `newQuantity` (number): New quantity for the product (minimum: 1)
   - Returns: Updated cart contents

## Resources

1. `rami-levy://checkout`
   - Get the URL for the Rami Levy checkout page
   - Returns: Checkout page URL

## Setup

### Authentication
This MCP server requires authentication tokens from an active Rami Levy session. To obtain these:

1. Log in to [Rami Levy's website](https://www.rami-levy.co.il)
2. Open your browser's developer tools (F12)
3. Go to the Network tab
4. Make any request (e.g., search for a product)
5. From the request headers, extract:
   - `RAMI_LEVY_API_KEY`: The token after "Bearer" in the Authorization header
   - `ECOM_TOKEN`: The full ecomtoken header value
   - `COOKIE`: The complete cookie header value

### Environment Variables
Create a `.env` file with the following variables:
```env
RAMI_LEVY_API_KEY=your_api_key_here
ECOM_TOKEN=your_ecom_token_here
COOKIE=your_cookie_string_here
```

### Usage with Claude Desktop

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "rami-levy": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-rami-levy"
      ],
      "env": {
        "RAMI_LEVY_API_KEY": "<YOUR_API_KEY>",
        "ECOM_TOKEN": "<YOUR_ECOM_TOKEN>",
        "COOKIE": "<YOUR_COOKIE>"
      }
    }
  }
}
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

## Security Considerations

⚠️ **Important**: This is a proof of concept implementation. Please note:

1. The authentication tokens provide full access to your Rami Levy account
2. Tokens should be kept secure and never committed to version control
3. Tokens expire periodically and will need to be refreshed
4. This implementation is not intended for production use without proper security review

## Limitations

1. Session tokens expire and need to be manually refreshed
2. Some features of the Rami Levy API are not implemented (e.g., user profile, order history)
3. Error handling for expired sessions could be improved
4. No rate limiting implementation

## Contributing

Issues and pull requests are welcome! Please ensure you don't commit any sensitive information like authentication tokens.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This is an unofficial project and is not affiliated with or endorsed by Rami Levy Chain Stores Ltd. All product names, logos, and brands are property of their respective owners.
