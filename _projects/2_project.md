---
layout: page
title: Volterra Processes & Non-Positive Curvature
description: Low-dimensional approximations for stochastic volatility using differential geometry
img: assets/img/3.jpg
importance: 2
category: research
giscus_comments: true
---

## Low-dimensional Approximations of Volterra Processes

This research tackles one of the most challenging problems in mathematical finance: predicting the conditional evolution of Volterra processes with stochastic volatility. Our approach combines **differential geometry** with **deep learning** to overcome the curse of dimensionality inherent in these infinite-dimensional problems.

### The Challenge

Volterra processes are fundamental in modeling:
- **Stochastic Volatility**: Complex dynamics in financial markets
- **Memory Effects**: Long-range dependencies in financial time series  
- **Non-Markovian Behavior**: Path-dependent phenomena in derivatives pricing

However, their **infinite dimensionality** and **non-smooth nature** make traditional deep learning approaches computationally intractable.

### Our Two-Step Solution

#### Step 1: Geometric Dimension Reduction
We develop a **stable dimension reduction technique** that projects the law of Volterra processes onto a **low-dimensional statistical manifold** with **non-positive sectional curvature**. This geometric approach:

- Preserves essential probabilistic structure
- Reduces computational complexity dramatically
- Maintains mathematical rigor through differential geometry

#### Step 2: Manifold-Aware Deep Learning
We introduce a **sequentially deep learning model** specifically tailored to the manifold's geometric properties:

**Auxiliary Hypernetwork Architecture:**
- **Dynamic Parameter Updates**: Internal parameters adapt based on temporal dynamics
- **Non-Stationary Encoding**: Captures time-varying behavior of Volterra processes
- **Mixture of Experts Interpretation**: Each expert specializes at specific temporal points

### Technical Innovation

#### Hypernetwork Design
Our auxiliary hypernetwork enables:
- **Temporal Specialization**: Different network configurations for different time periods
- **Efficient Approximation**: Achieves rates typically requiring much larger networks
- **Gating Mechanism**: Intelligent routing in mixture-of-experts framework

#### Mathematical Foundation
- **Rigorous Geometry**: Non-positive curvature manifolds provide stable approximation guarantees
- **Convergence Analysis**: Theoretical bounds on approximation quality
- **Stability Guarantees**: Robust performance under perturbations

### Research Contributions

#### Theoretical Advances
- Novel application of **non-positive curvature geometry** to financial modeling
- **Convergence rates** for manifold-based approximations
- **Stability analysis** for dimension reduction in infinite-dimensional settings

#### Practical Applications
- **Derivatives Pricing**: More efficient computation of complex financial instruments
- **Risk Management**: Better understanding of tail risks in volatile markets
- **Portfolio Optimization**: Improved modeling of correlation structures

### Collaborative Research

This work represents a **multi-institutional collaboration** with experts in:
- **Mathematical Finance** (John Armstrong, Giulia Livieri)
- **Differential Geometry** (Luca Galimberti)  
- **Deep Learning Theory** (Anastasis Kratsios)

### Impact and Future Work

Our framework opens new research directions in:
- **Geometric Deep Learning** for finance
- **Manifold-based approximation theory**
- **Hypernetwork applications** in temporal modeling

The combination of **rigorous mathematics** with **practical implementation** makes this work valuable for both theoretical research and real-world financial applications.

---

*This research bridges pure mathematics and applied AI, demonstrating how geometric insights can solve challenging problems in computational finance.*
