# Phase 2: Utility and Application Analysis (VoleyPro)

### Criterion 6a) Strategic Objectives
**What specific strategic objectives of the company does your software address?**
For a Sports Club or Municipal League, VoleyPro addresses the objective of operational modernization and ecological sustainability (going paperless). 
**How does the software align with the overall digitalization strategy?**
It acts as the entry point for digitalization. By capturing match data digitally at the source (the referee's table), the club can later build analytics dashboards, abandoning analog filing cabinets.

### Criterion 6b) Business Areas and Communications
**Which areas of the company are most benefited by your software?**
The Operations area (referees and coaches) benefits from automated point tracking, while the Communications area benefits from having instant access to match histories to post on social media.
**What operational impact do you expect in daily operations?**
A drastic reduction in human error regarding set calculations and a faster turnaround time for reporting match results to the federation.

### Criterion 6c) Areas Susceptible to Digitalization
**Which areas of the company are most susceptible to being digitized with your software?**
The "Match Record Keeping" and "Tactical Training" departments. 
**How will digitalization improve operations in those areas?**
Training is improved via the multimedia library, providing a standardized technical baseline for all youth categories.

### Criterion 6d) Integration of Digitized Areas (AD)
**How do the digitized areas interact with the non-digitized ones?**
Currently, the digital scoreboard (AD) must interact with the traditional federation administration (Non-AD) by manually reading the digital history and typing it into official physical forms.
**What solutions or improvements would you propose to integrate these areas?**
Implementing a CSV/PDF export feature so the digital match record can be automatically emailed to the federation.

### Criterion 6e) Present and Future Needs
**What current needs of the company does your software solve?**
It solves the need for an accessible, low-cost, offline-capable scoring tool that requires absolutely no training to use.

### Criterion 6f) Relationship with Technologies
**What enabling technologies have you used and how do they impact the company's areas?**
I have utilized Web Technologies (HTML5, CSS3 Glassmorphism UI) and Browser Storage APIs (`LocalStorage`). This impacts operations by allowing seamless use on existing hardware without purchasing dedicated scoreboard screens.

### Criterion 6g) Security Breaches
**What possible security breaches could arise when implementing your software?**
Since data is stored via `LocalStorage`, physical access to the unlocked device implies access to the club's match data. Furthermore, clearing the browser cache maliciously results in permanent data loss.
**What concrete measures would you propose to mitigate them?**
Enforcing device-level security (PIN/Biometrics) on the tablets used for scoring, and eventually moving to a Cloud database with JWT authentication and automated backups.

### Criterion 6h) Data Processing and Analysis
**How is data managed in your software and what methodologies do you use?**
Data is managed via an event-driven methodology. UI clicks trigger JavaScript functions that mutate a JSON object representing the match state, which is then serialized and saved locally.
**What do you do to guarantee the quality and consistency of the data?**
Input validation is strictly coded: scores cannot drop below zero, and sets require explicit user confirmation via prompt dialogs to prevent accidental resets.
