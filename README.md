# Playwright E2E Test Framework

Ein End-to-End Testautomatisierungsprojekt für die Webanwendung **SauceDemo**, implementiert mit **Playwright** und **TypeScript**.

Dieses Projekt demonstriert, wie ein modernes Testautomatisierungsframework für Webanwendungen aufgebaut werden kann.

---

## Technologien

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI)
- Page Object Model (POM)

---

## Projektstruktur


src/
pages/ # Page Objects
data/ # Testdaten
fixtures/ # Gemeinsame Fixtures (z.B. authentifizierte Session)

tests/
smoke/ # Smoke Tests
regression/ # Regression Tests
negative/ # Negative Tests


---

## Testabdeckung

### Smoke Tests
- Benutzer kann sich erfolgreich anmelden
- Produktliste wird korrekt geladen
- Erfolgreicher Checkout-Prozess

### Regression Tests
- Produkt kann in den Warenkorb gelegt werden

### Negative Tests
- Validierung beim Checkout (fehlende Postleitzahl)

---

## Installation

Abhängigkeiten installieren:

```bash
npm install
npx playwright install
Tests ausführen

Alle Tests ausführen:

npx playwright test

Nur Smoke Tests ausführen:

npm run test:smoke
HTML Testbericht öffnen

Nach der Testausführung kann der Playwright HTML Report geöffnet werden:

npx playwright show-report
Continuous Integration

Die Tests werden automatisch über GitHub Actions ausgeführt bei:

jedem Push in den main Branch

Pull Requests

täglichem geplanten Lauf (Scheduled Run)

Ziel des Projekts

Dieses Projekt demonstriert die Implementierung eines strukturierten Testautomatisierungsframeworks mit:

Playwright

TypeScript

Page Object Model

Testdatenverwaltung

automatisierter CI Pipeline
