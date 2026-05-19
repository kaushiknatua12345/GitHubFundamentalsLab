\# Reusable AI Workflows



\## Purpose



This folder contains reusable AI workflow templates for enterprise-grade AI-assisted development.



These files help teams use GitHub Copilot in a repeatable, scalable, and token-efficient way.



\## Workflow Files



| File | Purpose |

|---|---|

| shared-context.md | Project-specific context |

| requirement-assistant.md | Converts requirements into user stories |

| api-design-assistant.md | Designs endpoints and DTOs |

| backend-build-assistant.md | Generates backend code |

| frontend-build-assistant.md | Generates frontend code |

| test-assistant.md | Generates test scenarios and test code |

| review-assistant.md | Reviews focused files or code |

| workflow-checklist.md | Guides the full SDLC workflow |

| copilot-training-exercises.md | Training guide for non-technical Copilot practice |



\## Recommended Usage



1\. Update `shared-context.md` for the project.

2\. Use the assistant file that matches the SDLC phase.

3\. Provide a small, focused task.

4\. Ask for constrained output.

5\. Review all AI-generated output manually.



\## Formula



Reusable AI Role  

\+ Project Context  

\+ Specific Task  

= Controlled AI Output



\## Example



```text

Using shared-context.md and backend-build-assistant.md:



Generate only CustomerCreateDto.cs.



Fields:

\- FullName

\- Email

\- PhoneNumber

\- City



Include validation attributes.

Return only code.

