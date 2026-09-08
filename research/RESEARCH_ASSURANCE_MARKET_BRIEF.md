# Research Assurance market brief

## Product truth

Research Assurance is an integration and assurance control plane for independently versioned research systems.

It pins known-good component revisions, defines stack-level contracts, validates cross-component compatibility, and preserves evidence for why a particular stack revision is considered usable.

It deliberately refuses to collapse different questions into one `verified=true` state.

Source-level provenance, retrieval quality, temporal validity, source suitability, numeric/entity consistency, semantic support, and downstream conclusion correctness remain distinct assurance dimensions.

## Human problem

A modern AI research stack can produce an answer that looks well supported while different parts of the pipeline are answering different questions.

A result can be:

- from a reputable source;
- correctly cited;
- successfully retrieved;
- numerically consistent;

and still be stale, semantically unsupported, produced by the wrong model/config revision, or reused from a mismatched benchmark state.

The core human question is:

> What did this result actually prove, under which exact stack, and what still has not been established?

## Concrete product behavior

The current Research Assurance M2 retrieval-assurance program freezes exact source and experiment identities before expensive execution.

Its README states that no result may be reused across mismatched source heads, corpus/query/qrels-oracle identities, model/config revisions, temporal policies, experiment versions, or parent artifact digests. Partial checkpoints are explicitly non-authoritative.

The active M2 campaign also distinguishes public selection work from a hidden confirmatory holdout. The current protocol freezes **5,074 public-campaign cases**, **six base retrieval candidates**, and a **100-case hidden confirmatory holdout** that remains outside the public repository.

Those numbers describe protocol scope, not a claim that M2 has already established a winning system.

## Audience

### Primary

AI/research engineers and technical leads building evidence-heavy systems where a model answer, retrieval result, or evaluation may influence consequential analysis.

### Secondary

- technical founders building RAG/evaluation infrastructure;
- research teams coordinating multiple benchmark/evidence components;
- platform teams that need reproducible stack-level evaluation;
- investors or engineering leaders evaluating whether an AI reliability product has a meaningful systems-level wedge.

## Audience language

- "Which exact stack produced this result?"
- "Did we rerun this after the corpus changed?"
- "The citation is correct. Does it actually support the claim?"
- "Are we looking at retrieval quality or truth?"
- "Was this the public tuning set or the hidden holdout?"
- "Why is this green when one layer was never tested?"

## Market timing

AI assurance is becoming more important as deployment grows faster than standardized evaluation practice.

The 2026 Stanford AI Index says responsible-AI benchmarking is increasing but is not keeping pace with AI advances and deployment. It reports **362 documented AI incidents in 2025**, up from **233 in 2024**, while responsible-AI benchmark reporting among leading frontier developers remains sparse.

Source: https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai

NIST's AI measurement and evaluation program states that trustworthy AI depends heavily on reliable measurements and evaluations of underlying technologies and their use.

Source: https://www.nist.gov/ai-measurement-and-evaluation

NIST's work on AI assurance describes assurance across multiple dimensions including data quality, performance, statistical considerations, trustworthiness, security, and explainability rather than one universal property.

Source: https://www.nist.gov/publications/path-consensus-artificial-intelligence-assurance

RAG evaluation research also separates dimensions. ARES evaluates context relevance, answer faithfulness, and answer relevance individually rather than treating a RAG system as one undifferentiated score.

Source: https://aclanthology.org/2024.naacl-long.20/

## Competitive / substitute frame

Research Assurance should not pretend the AI evaluation/observability market is empty.

Relevant categories include:

- LLM evaluation platforms;
- RAG evaluation;
- observability and tracing;
- model monitoring;
- experiment tracking;
- data/model lineage;
- benchmark harnesses;
- provenance systems;
- responsible-AI governance;
- internal research notebooks and manually pinned experiment configs.

Potential wedge:

> Research Assurance is not another single evaluator. It coordinates independently versioned assurance layers and preserves exactly what each layer established for a particular stack revision.

## Positioning candidates

### A. Trust is not one green light

**Hero idea:** A green eval can still hide an untested layer.

Strength: communicates multidimensional assurance immediately.

Risk: could drift toward generic enterprise governance without concrete stack examples.

### B. The answer can be sourced, relevant, and still wrong

Strength: relatable to RAG/AI researchers and naturally opens into separate source, retrieval, temporal, and semantic checks.

Risk: needs careful wording so Research Assurance is not claiming it already solves every semantic-truth layer.

### C. Know exactly what was tested together

Strength: directly reflects the BOM/control-plane architecture and exact-revision contracts.

Risk: more infrastructure-oriented and less emotionally immediate.

## Recommended candidate mix

1. **Calibration Lab** — bright scientific-instrument aesthetic, each assurance dimension as a separate gauge.
2. **Evidence Stack Editorial** — bold editorial storytelling around a result that passes some checks and fails another.
3. **Assurance Constellation 3D** — spatial graph of independently lit assurance nodes where one green node never lights the whole system.
4. **Control Plane / Investor** — ambitious AI-era infrastructure story emphasizing evaluation debt, exact stack identity, and the market shift toward trustworthy AI systems.

## Claims to avoid

- Research Assurance proves an AI answer is true end-to-end today.
- All planned assurance layers are already implemented.
- M2 has completed or selected a winner if the current repo still says the campaign is active.
- FOSSIL provenance implies semantic entailment.
- Retrieval rank implies truth.
- The public campaign or hidden holdout results exist before the relevant phases actually run.
