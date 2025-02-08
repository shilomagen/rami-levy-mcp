#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import * as cart from "./operations/cart.js";
import * as search from "./operations/search.js";
import { formatError } from "./common/utils.js";

const server = new Server(
  {
    name: "rami-levy-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "rami-levy://checkout",
        name: "Checkout Link",
        description: "The URL for the Rami Levy checkout page",
      },
    ],
  };
});

// Handle resource reading
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  switch (request.params.uri) {
    case "rami-levy://checkout":
      return {
        contents: [
          {
            uri: request.params.uri,
            text: "https://www.rami-levy.co.il/he/dashboard/checkout",
          },
        ],
      };
    default:
      throw new Error(`Unknown resource: ${request.params.uri}`);
  }
});

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "add_to_cart",
        description: "Add one or more items to the shopping cart",
        inputSchema: zodToJsonSchema(cart.AddToCartSchema),
      },
      {
        name: "remove_from_cart",
        description:
          "Remove items from the cart by providing an updated list of items to keep",
        inputSchema: zodToJsonSchema(cart.RemoveFromCartSchema),
      },
      {
        name: "update_quantity",
        description: "Update the quantity of an item in the cart",
        inputSchema: zodToJsonSchema(cart.UpdateQuantitySchema),
      },
      {
        name: "search_items",
        description: "Search for items in the Rami Levy catalog",
        inputSchema: zodToJsonSchema(search.SearchItemsSchema),
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    if (!request.params.arguments) {
      throw new Error("Arguments are required");
    }

    switch (request.params.name) {
      case "add_to_cart": {
        const args = cart.AddToCartSchema.parse(request.params.arguments);
        const result = await cart.addToCart(args);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }

      case "remove_from_cart": {
        const args = cart.RemoveFromCartSchema.parse(request.params.arguments);
        const result = await cart.removeFromCart(args);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }

      case "update_quantity": {
        const args = cart.UpdateQuantitySchema.parse(request.params.arguments);
        const result = await cart.updateQuantity(args);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }

      case "search_items": {
        const args = search.SearchItemsSchema.parse(request.params.arguments);
        const result = await search.searchItems(args);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }

      default:
        throw new Error(`Unknown tool: ${request.params.name}`);
    }
  } catch (error) {
    throw new Error(formatError(error));
  }
});

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Rami Levy MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
