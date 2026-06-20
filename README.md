# AWS EC2 Automated Deployment & Runtime Optimization

An end-to-end cloud infrastructure project documenting the migration of a Node.js/Express application from a local environment to AWS EC2. Features manual secure copy processes, background runtime daemon optimization with PM2, and an automated deployment pipeline via AWS CodeDeploy.

---

## 🏗️ Architecture Blueprint
...


The infrastructure is designed around a decoupled, automated deployment model that transitions away from risky manual file migrations to structural, event-driven pipelines.

| Service Component | Technology | Operational Role |
| :--- | :--- | :--- |
| **Compute Node** | AWS EC2 (t2.micro) | Hosts the production runtime environment and application server. |
| **Orchestration** | AWS CodeDeploy | Automates application lifecycle execution hooks and target synchronizations. |
| **Application Layer** | Node.js / Express | Server-side API routing handling network handshakes on Port 3000. |
| **Process Management** | PM2 Daemon | Maintains persistent background execution and automatic crash recovery. |
| **Network Security** | AWS Security Groups | Stateful firewall managing ingress traffic profiles for HTTP/TCP boundaries. |

---

## 🛠️ The DevOps Challenge & Incident Report

### 🚨 The Problem: Edge-Network Application Timeouts
During initial automation phases, the application successfully passed through the AWS CodeDeploy pipeline execution ledger, yet external network traffic targeting the public IP address on Port 3000 resulted in an explicit `ERR_CONNECTION_TIMED_OUT` state. 

### 🔍 Root Cause Analysis (RCA)
1. **Synchronous Foreground Execution:** The server initialization script (`start_server.sh`) was firing natively in the terminal foreground.
2. **Lifecycle Blockers:** Because the script did not yield control back to the operating system, the AWS CodeDeploy Agent was forced to wait for completion.
3. **Automated Timeout Killing:** Upon hitting the maximum execution window threshold, CodeDeploy terminated the deployment lifecycle, forcefully killing the synchronous application process along with it.

### 💡 The Solution: Process Decoupling & Daemons
To solve this, the runtime model was upgraded to decouple the node execution from the shell lifecycles. By integrating **PM2**, the web server process was shifted into a background fork daemon, letting the CodeDeploy engine successfully conclude its tasks without terminating the live environment.

```bash
#!/list/of/scripts/start_server.sh
# Upgraded production script to daemonize the application layer
cd /home/ec2-user/devops-deployment-optimization
pm2 start app.js --name "legacy-manual-web-server"

---

## 📸 Project Evolution & Milestone Gallery

### Phase 1: Local Baseline & Manual Infrastructure Evolution

#### 1. Core Service Architecture Definition
![01-application-created](https://github.com/user-attachments/assets/c8d940ac-b41a-426f-9546-fac279e8cc00)
*Caption: Defining core Express routing logic and environment variables inside the local code editor workspace.*

#### 2. Local Environment Verification
![02-application-running-locally](https://github.com/user-attachments/assets/53aa4955-56b5-4312-b953-71c2fc8d9ee6)
*Caption: Local sandbox verification loop running successfully on localhost:3000 prior to cloud staging.*

#### 3. Manual Compute Artifact Ingestion
![03-manual-deployment-process](https://github.com/user-attachments/assets/e1fe9f4d-380b-4e11-b5eb-1399751488f8)
*Caption: Using the Secure Copy Protocol (SCP) to manually inject local application builds over an encrypted SSH channel to the remote AWS EC2 host instance.*

#### 4. Initial Live Cloud Handshake
![04-ssh-deployment](https://github.com/user-attachments/assets/0a142a20-9053-471c-8f91-ead67d54b387)
*Caption: Browser verification confirming the manually deployed application is successfully running live on the public AWS EC2 IP address.*

#### 5. Production Process Environment Upgrade
![05-manual-upgrade-running](https://github.com/user-attachments/assets/6df04895-fe3d-483b-8878-cac833c496f7)
*Caption: Active remote SSH terminal environment establishing and validating the execution of background process configurations directly on the host machine.*

---

### Phase 2: Automated Orchestration & Validation

#### 6. Automated Infrastructure Synchronization Passes
![06-pipeline-success](https://github.com/user-attachments/assets/12056a16-e247-4118-8f1a-1ec1fd97f7f5)
*Caption: AWS CodeDeploy orchestration dashboard processing lifecycle deployment events successfully over target nodes.*

#### 7. Unified 3-Window Telemetry & Result Verification
![07-pipeline-success-verification](https://github.com/user-attachments/assets/2c79cb9a-47a0-48b2-a064-622e8819a027)
*Caption: Final engineering validation. Left: Remote curl request yielding a clean HTTP 200 OK status. Top-Right: Persistent process daemon table keeping the decoupled instance online. Bottom-Right: Command prompt window confirming the desired outcome.*

## 🚀 Decommissioning & Cost Optimization Ledger

To adhere to enterprise cloud budgeting standards and maintain a perfect $0.00 spend architecture upon lab completion, the following decommissioning checklist was fully executed:

*   **Compute Termination:** The `legacy-manual-web-server` EC2 instance was completely transitioned into a terminated state to stop compute cycle accruals.
*   **Storage Volume Purging:** Checked Elastic Block Store (EBS) ledgers to delete any orphan volumes left behind by non-sticky terminations.
*   **Static IP Address Release:** Released unattached Elastic IP (EIP) allocations back to the regional AWS pool to avoid unassociated reservation charges.
*   **RDS Asset Verification:** Cleaned up transient data layers and snapshots to ensure zero residual relational storage overhead.
