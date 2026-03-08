---
title: "Publications"
summary: "Research publications"
---

## Research

### YOLO3D: Real-Time Stereo 3D Object Detection

Stereo 3D object detection on KITTI by extending the Ultralytics YOLO framework. The model takes calibrated stereo image pairs (left + right RGB) and predicts 3D bounding boxes with class, dimensions, orientation, and depth in real time.

**Key contributions:**

- **Siamese weight-shared backbone** -- standard 3-channel YOLO backbone processes left/right images via a batch dimension trick with 100% shared weights, enabling full pretrained weight compatibility
- **Stereo cost volume** -- sparse dot-product correlation at 24 disparity offsets, routed exclusively to depth branches to avoid 2D-3D task conflict
- **DFL-style depth bins** -- 16-bin classification in log-depth space using Distribution Focal Loss, replacing scalar regression for more stable training

**Results (KITTI R40, Moderate):**

| Size | Params | Mean AP3D@0.5 | Mean AP3D@0.7 | Car AP3D@0.5 | FPS |
|------|--------|---------------|---------------|--------------|-----|
| n | 3.6M | 48.1% | 29.9% | 70.7% | 127 |
| s | 11.6M | 48.3% | 29.4% | 71.7% | 122 |
| m | 26.7M | 49.0% | 29.1% | 71.1% | 111 |
| l | 31.2M | **50.9%** | **31.6%** | 71.3% | 72 |

All models run well above real-time (>30 FPS) on a single GPU.

**Tech stack:** Ultralytics YOLO, PyTorch, KITTI benchmark

[Code](https://github.com/ultralytics/ultralytics) | [Experiments Report](/publications/yolo3d-experiments/)
