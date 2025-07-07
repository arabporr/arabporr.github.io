---
layout: page
title: LoRA Fine-Tuning Without GPUs
description: A CPU-Efficient Meta-Generation Framework for Large Language Models
img: assets/img/lora_cpu.jpg
importance: 1
category: research
related_publications: true
github: https://github.com/arabporr/Large_Language_Model_Low-Rank_Adaptation_on_CPU
---

## LoRA Fine-Tuning Without GPUs: A CPU-Efficient Meta-Generation Framework

This project addresses a critical barrier in LLM democratization: the GPU requirement for fine-tuning. Our research develops a theoretically grounded approach that enables effective LoRA fine-tuning on standard laptop CPUs, making advanced AI accessible to researchers with limited computational resources.

### Key Innovation

The core breakthrough lies in our **meta-learning approach** that learns to map any input dataset (represented as a probability distribution) to a set of LoRA weights by leveraging a large bank of pre-trained adapters. Instead of performing new gradient-based updates, our pipeline constructs adapters via lightweight combinations of existing LoRAs directly on CPU.

### Technical Highlights

- **Meta-Operator Design**: Novel architecture that maps datasets to optimal LoRA combinations
- **CPU-Optimized Pipeline**: Eliminates GPU dependency while maintaining fine-tuning effectiveness
- **Theoretical Foundation**: Rigorous mathematical framework supporting the meta-learning approach
- **Practical Implementation**: Demonstrated on Mistral-7B-Instruct-v0.2 model

### Research Impact

- **Democratized Access**: Makes LLM customization available to researchers without expensive hardware
- **Sustainable AI**: Reduces computational costs and energy consumption
- **Academic Recognition**: Accepted to ICML 2025 Workshop on Efficient Systems for Foundation Models

### Technical Stack

- **Framework**: PyTorch, Transformers (Hugging Face)
- **Model**: Mistral-7B-Instruct-v0.2
- **Optimization**: CPU-specific algorithmic improvements
- **Evaluation**: Comprehensive experiments across diverse NLP tasks

### Related Publication

**"LoRA Fine-Tuning Without GPUs: A CPU-Efficient Meta-Generation Framework for LLMs"**  
*Reza Arabpour, Haitz Sáez de Ocáriz Borde, Anastasis Kratsios*  
*Accepted to ICML 2025 Workshop on Efficient Systems for Foundation Models*  
*arXiv:2507.01806*

This research represents a significant step toward democratizing AI by reducing computational barriers to LLM customization.
