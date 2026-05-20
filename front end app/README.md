# FrontEndApp

This Angular app is the sample employee registration experience used in the training lab.

## What it does

- Lets you register employees with a simple form.
- Validates names, email, department, and start date before saving.
- Stores employee records in memory only while the app is open.

## Run it locally

From this folder, install dependencies and start the dev server:

```bash
npm install
npm start
```

Then open `http://localhost:4200/` in your browser.

## Build and test

```bash
npm run build
npm test
```

## Notes

The app uses Angular 21 and a lightweight in-memory employee store, so no backend or database is required.
