## 📸 Project Evolution & Milestone Gallery

<details>
<summary><b>Phase 1: Local Baseline & Manual Infrastructure Evolution (Snapshots 1-5)</b></summary>
<br>

### 1. Core Service Architecture Definition
![Local Application Created](screenshots/01-application-created.png)
*Caption: Defining core Express routing logic and environment variables inside the local code editor workspace.*

### 2. Local Environment Verification
![Application Running Locally](screenshots/02-application-running-locally.png)
*Caption: Local sandbox verification loop running successfully on localhost:3000 prior to cloud staging.*

### 3. Manual Compute Artifact Ingestion
![Manual Secure Copy Process](screenshots/03-manual-deployment-process.png)
*Caption: Using the Secure Copy Protocol (SCP) to manually inject local application builds over an encrypted SSH channel to the remote AWS EC2 host instance.*

### 4. Initial Live Cloud Handshake
![Live Web Instance Verification](screenshots/04-ssh-deployment.png)
*Caption: Browser verification confirming the manually deployed application is successfully running live on the public AWS EC2 IP address.*

### 5. Production Process Environment Upgrade
![Manual Process Upgrade Implementation](screenshots/05-manual-upgrade-running.png)
*Caption: Active remote SSH terminal environment establishing and validating the execution of background process configurations directly on the host machine.*
</details>

<details>
<summary><b>Phase 2: Automated Orchestration & Validation (Snapshots 6-7)</b></summary>
<br>

### 6. Automated Infrastructure Synchronization Passes
![AWS CodeDeploy Progress Status](screenshots/06-codedeploy-success-console.png)
*Caption: AWS CodeDeploy orchestration dashboard processing lifecycle deployment events successfully over target nodes.*

### 7. Unified 3-Window Telemetry & Result Verification
![Decoupled Production Grid Dashboard](screenshots/07-pipeline-success-verification.png)
*Caption: Final engineering validation. Left: Remote curl request yielding a clean HTTP 200 OK status. Top-Right: Persistent process daemon table keeping the decoupled instance online. Bottom-Right: Command prompt window confirming the desired outcome.*
</details>
