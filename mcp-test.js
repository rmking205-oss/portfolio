const { Client } = require("@modelcontextprotocol/sdk/client/index.js");
const { StdioClientTransport } = require("@modelcontextprotocol/sdk/client/stdio.js");

async function testMCP() {
    const client = new Client({
        name: "portfolio-playground",
        version: "1.0.0"
    });

    const transport = new StdioClientTransport({
        command: "npx.cmd",
        args: [
            "-y",
            "@modelcontextprotocol/server-memory"
        ]
    });

    await client.connect(transport);

    console.log("Memory MCP connected successfully!");

    const tools = await client.listTools();

    console.log("\nAvailable Memory MCP Tools:");

    for (const tool of tools.tools) {
        console.log("-", tool.name);
    }

    const createResult = await client.callTool({
        name: "create_entities",
        arguments: {
            entities: [
                {
                    name: "Fresh_MCP_Test",
                    entityType: "test",
                    observations: [
                        "This is a fresh Memory MCP test.",
                        "We are using Node.js."
                    ]
                }
            ]
        }
    });

    console.log("\n===== MEMORY CREATED =====");
    console.log(createResult);

    const searchResult = await client.callTool({
        name: "search_nodes",
        arguments: {
            query: "Fresh_MCP_Test"
        }
    });

    console.log("\n===== MEMORY SEARCH RESULT =====");
    console.log(searchResult);

    await client.close();

    console.log("\nMemory MCP test completed successfully!");
}

testMCP().catch(error => {
    console.error("MCP Error:", error);
});