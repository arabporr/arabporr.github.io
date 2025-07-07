---
layout: page
title: Grapevine Leaves Classification
description: Deep learning approach for grape variety identification using Convolutional Neural Networks
img: assets/img/grape_cnn.jpg
importance: 3
category: research
github: https://github.com/arabporr/Grapevine_Leaves_Classification_CNN
---

## Grapevine Leaves Classification using CNNs

This computer vision project applies deep learning techniques to classify grape varieties based on leaf images. Using Convolutional Neural Networks (CNNs), the system achieves high accuracy in distinguishing between different grapevine species, with applications in agriculture and viticulture.

### Project Motivation

Accurate identification of grape varieties is crucial for:
- **Agricultural Management**: Optimizing cultivation practices for specific varieties
- **Quality Control**: Ensuring proper grape selection for wine production
- **Research Applications**: Supporting botanical and agricultural research
- **Automation**: Enabling automated sorting and classification systems

### Technical Approach

The project employs state-of-the-art deep learning architectures to extract meaningful features from leaf images and classify them into distinct grape varieties.

### Model Architecture

- **Pre-trained Models**: Utilized ResNet and VGG architectures for transfer learning
- **Custom CNN**: Designed specialized architecture for leaf classification
- **Data Augmentation**: Applied various transformations to increase dataset diversity
- **Regularization**: Implemented dropout and batch normalization for better generalization

### Performance Results

- **Validation Accuracy**: ~90% on validation dataset
- **Test Accuracy**: ~85% on out-of-sample test data
- **Model Robustness**: Consistent performance across different lighting conditions
- **Generalization**: Effective classification on unseen grape varieties

### Technical Enhancements

- **Image Preprocessing**: Noise reduction and standardization pipelines
- **Dimension Reduction**: Autoencoder networks for feature compression
- **Model Optimization**: Hyperparameter tuning and architecture search
- **Evaluation Metrics**: Comprehensive assessment using precision, recall, and F1-score

### Dataset and Processing

- **Image Collection**: Diverse grape leaf images under various conditions
- **Data Preprocessing**: Standardization, resizing, and normalization
- **Augmentation Techniques**: Rotation, scaling, and color adjustment
- **Train/Test Split**: Proper validation methodology for reliable results

### Technical Stack

- **Framework**: TensorFlow, Keras, PyTorch
- **Languages**: Python
- **Libraries**: OpenCV, PIL, Matplotlib, NumPy
- **Visualization**: Model interpretation and result analysis tools

### Research Collaboration

This work was conducted under the supervision of **Dr. Hedieh Sajedi** at the University of Tehran, contributing to the intersection of computer vision and agricultural applications.

### Practical Applications

- **Agricultural Automation**: Integration into farming management systems
- **Educational Tools**: Supporting botany and agriculture education
- **Research Platform**: Foundation for advanced plant classification studies
- **Industry Integration**: Potential applications in wine production and agriculture

### Code and Documentation

Complete implementation with detailed documentation available on GitHub, including:
- Model training scripts and architectures
- Data preprocessing pipelines
- Evaluation metrics and visualization tools
- Comprehensive project report with methodology and results

This project demonstrates the practical application of deep learning in agricultural technology, showcasing how computer vision can solve real-world classification problems in specialized domains.
