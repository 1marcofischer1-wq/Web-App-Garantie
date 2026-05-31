Perfekt, Marco — dann baue ich dir jetzt einen **kompletten, aktualisierten README**, der **Render‑Hosting**, **Twilio SendGrid**, **Bild‑ und Video‑Upload** und deine Motivation sauber integriert.  
Du kannst ihn **1:1 in GitHub übernehmen**.

---

# **README – Bestandsaufnahme WebApp**

Diese WebApp dient zur digitalen Erfassung von Maschinen, Staplern und Flurförderfahrzeugen.  
Sie wurde aus persönlichem Interesse an Programmierung und als praxisnahe Lösung für interne Unternehmensprozesse entwickelt.  
Ziel ist es, die Bestandsaufnahme schneller, strukturierter und vollständig digital abzubilden.

---

## **✨ Funktionen**

- **Formular zur Bestandsaufnahme** von Maschinen, Staplern und Flurförderfahrzeugen  
- **Upload von Bildern und Videos** (z. B. Zustand, Schäden, Seriennummern)  
- **Automatischer E‑Mail‑Versand** der erfassten Daten über Twilio SendGrid  
- **Online‑Bereitstellung über Render**  
- **Intuitive Benutzeroberfläche** für schnelle Datenerfassung  
- **Validierte Eingaben** für saubere und vollständige Datensätze  
- **Mobile‑friendly UI** für Nutzung direkt in der Halle oder im Lager

---

## **🌐 Live‑Version**

Die WebApp ist jederzeit online erreichbar:

👉 **[https://web-app-garantie.onrender.com/](https://web-app-garantie.onrender.com/)**

---

## **🚀 Deployment (Render)**

Die Anwendung wird über **Render** gehostet.  
Render übernimmt:

- automatisches Deployment bei Änderungen  
- Hosting der WebApp  
- HTTPS‑Bereitstellung  
- stabile Performance ohne eigenen Server

Damit ist die App ohne zusätzliche Infrastruktur dauerhaft verfügbar.

---

## **📧 E‑Mail‑Integration (Twilio SendGrid)**

Für den automatisierten Versand der Formulardaten wird **Twilio SendGrid** verwendet.  
Nach dem Absenden des Formulars werden:

- alle eingegebenen Daten  
- hochgeladene Bilder  
- hochgeladene Videos  

automatisch an eine definierte E‑Mail‑Adresse gesendet.

Vorteile:

- zuverlässiger Versand  
- sichere API‑Kommunikation  
- kein eigener Mailserver notwendig  
- ideal für WebApps ohne komplexes Backend

---

## **🖼️ Medien‑Upload (Bilder & Videos)**

Die App unterstützt den Upload von:

- Fotos (z. B. Zustand, Typenschild, Schäden)  
- Videos (z. B. Funktionsprüfung, Fahrverhalten, Geräusche)

Die Dateien werden zusammen mit den Formulardaten verarbeitet und per E‑Mail versendet.

---

## **🛠️ Technologien**

- **Frontend:** HTML, CSS, JavaScript  
- **Backend / API:** Node.js (falls genutzt)  
- **E‑Mail‑Service:** Twilio SendGrid  
- **Hosting:** Render  
- **Medienverarbeitung:** Browser File API

---

## **🎯 Motivation**

Die App entstand aus:

- Interesse an Webentwicklung  
- Freude an Problemlösung  
- dem Wunsch, interne Abläufe im Unternehmen zu verbessern  
- dem Ziel, praktische Erfahrung mit Hosting, APIs, Medien‑Uploads und Formularlogik zu sammeln

---

## **📌 Status & Ausblick**

Das Projekt wird aktiv weiterentwickelt.  
Geplante Erweiterungen:

- PDF‑Export der Bestandsaufnahme  
- QR‑Code‑Generierung für jede Maschine  
- Datenbank‑Anbindung (z. B. PostgreSQL)  
- Dashboard für Auswertungen  
- Benutzerverwaltung & Rollen  
- Offline‑Modus für Hallen ohne WLAN

---
