# Automated Deployment Optimization & Run-Time Lifecycle Persistence

An enterprise-grade DevOps case study focusing on decoupling asynchronous server runtimes from synchronous automation pipeline engines on Amazon Web Services (AWS).

## 🗺️ System Architecture Blueprint
The diagram below illustrates the continuous delivery data flow, security boundaries, and execution contexts used to decouple and persist the web application tier.



### Cloud Services Inventory
| Service Component | Functional Role | Infrastructure Implementation Specifications |
| :--- | :--- | :--- |
| **AWS EC2** | Compute Node | Hosts the production `legacy-manual-web-server` virtual host instance running Amazon Linux. |
| **AWS CodeDeploy** | Automation Engine | Orchestrates revision hooks via `appspec.yml` and pushes application builds natively onto target nodes. |
| **AWS IAM** | Identity Management | Attaches an instance execution profile role onto the host server to authorize trust communication patterns. |
| **AWS Security Group** | Stateful Firewall | Sets rigorous ingress authorization limits: TCP Port `22` (SSH management) and TCP Port `3000` (Application Traffic). |
| **PM2 Engine** | Process Management | Acts as an unlinked runtime abstraction layer to daemonize, track, and monitor background processes. |

---

## 🚨 Root Cause Analysis & Incident Failure Report

### 📉 The Incident Profile
- **Symptom:** The AWS CodeDeploy agent reported a green **Success** state upon finishing execution, but the site was completely unreachable over the public network (`ERR_CONNECTION_TIMED_OUT`).
- **Initial Execution Trap:** ```bash
  # Inside initial scripts/start_server.sh:
  node app.js
