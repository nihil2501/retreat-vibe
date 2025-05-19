# Service Solicitation System
## Data model
```
service_solicitation_definitions
  solicitor_id
  solicited_query
  solicited_selection
  message
  start_at
  finish_at

service_solicitations
  service_solicitation_definition_id
  solicited_id
  sent_at
  resolved_at
  resolution
```

## Idea
TODO: Tease apart the distinct concepts from this particularly elaborate feature

- On the system design
  - Coupled concepts
    - 
- On vibe coding
  - Invented stuff which I didn't even ask for, which is cool (and potentially distinctly useful)
  - What's the accept/reject stuff about in Zed et al?
  - Really makes ya think
    - Awkward spot between production code and its capabilities
    - There could maybe be a really good way to integrate into workflow, but right now it seems complex, still maybe doable
    - Looked at `vets-api` vibed-code, and it looks risky, even from experienced engineer
