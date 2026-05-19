# Reusable AI Workflows

This folder contains reusable AI workflow templates designed to make GitHub Copilot–assisted development repeatable, safe, and efficient for teams.

Each file in this directory provides a focused assistant or template for a specific phase of the software development lifecycle (SDLC). Use them to reduce token usage, standardize outputs, and speed up common tasks — but always review AI-generated results before merging.

## Included files

| File | Purpose |
|---|---|
| shared-context.md | Project-specific context used by other assistants |
| requirement-assistant.md | Converts requirements into user stories and acceptance criteria |
| api-design-assistant.md | Designs API endpoints and DTOs (data transfer objects) |
| backend-build-assistant.md | Scaffolds backend code and patterns |
| frontend-build-assistant.md | Scaffolds frontend components and pages |
| test-assistant.md | Generates test scenarios and example test code |
| review-assistant.md | Focused review guidance for specific files or features |
| workflow-checklist.md | Step-by-step checklist covering the SDLC flow for this project |
| copilot-training-exercises.md | Guided training exercises for non-technical Copilot practice |

## Recommended usage

1. Populate `shared-context.md` with concise project-level information (goals, tech stack, conventions, and constraints).
2. Select the assistant file that matches the SDLC phase you are working on (for example, use `requirement-assistant.md` when translating feature requests into user stories).
3. Provide a focused, small task to the assistant (one clear output per request). Avoid asking for very large multi-part outputs in a single prompt.
4. Constrain the output format (for example: "Return only a JSON schema" or "Return only a DTO class definition").
5. Manually review all AI-generated output for correctness, security, and adherence to project standards.

## Workflow formula

Reusable AI Role + Project Context + Specific Task = Controlled AI Output

This formula reminds teams to provide a clear role, include project context, and ask a single specific task so results are predictable and reviewable.

## Example

Use the shared context and the backend assistant to request a constrained output:

```
Using shared-context.md and backend-build-assistant.md:

Generate only CustomerCreateDto.cs.

Fields:
- FullName
- Email
- PhoneNumber
- City

Include validation attributes.
Return only code.
```

## Notes and best practices

- Keep `shared-context.md` short and precise — include only facts that should influence generated code.
- Prefer one small, verifiable change per assistant invocation.
- Do not rely on generated code without human review: check for security issues, licensing, and alignment with project conventions.

---

If you'd like, I can also update other workflow templates in this directory for consistency.