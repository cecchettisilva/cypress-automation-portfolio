export { terminalLog }

function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    
    const violationData = violations.map(
      ({ id, impact, description, help, helpUrl, nodes }) => ({
        Violation: id,
        Impact: impact,
        Description: description,
        Resume: help,
        Documentation: helpUrl,
        Elements: nodes.length
      })
    )

    const violationNodeData = violations.map(
      ({ nodes }) => ({
        ...nodes
      })
    )

    cy.task('table', violationData)
    cy.task('log', JSON.stringify(violationNodeData, null, 4))
}