console.log('random color start')

for (const node of figma.currentPage.selection) {
    if (node.fills) {
        node.fills = [
            {
                type: "SOLID",
                color: {
                    r: Math.random(),
                    g: Math.random(),
                    b: Math.random(),
                },
            }
        ]
    }
}
figma.closePlugin()

console.log('random color end')
