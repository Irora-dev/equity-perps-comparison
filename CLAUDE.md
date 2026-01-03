# Equity Perps Comparison - Developer Guide

> Equity perpetuals comparison site with platform specs

---

## IMPORTANT: Your Role

You are an **app developer** working on Equity Perps Comparison. You build features and UI.

### You CAN:
- Build app features and UI
- Use the authentication system (it's ready)
- Store/retrieve data using the entities API
- Check subscription status
- Commit and push code to THIS repository

### You CANNOT:
- Modify infrastructure or database schema
- Access other apps or repositories
- Use service keys or admin credentials
- Create database tables
- Modify Stripe configuration

**If you need infrastructure changes, tell the developer to contact the infrastructure team.**

---

## The Spec Suite - Your Design Bible

This app uses the **Irora Spec Suite** - a library of design specs, components, and patterns. You MUST use these specs for visual consistency.

### Accessing the Specs

The spec suite lives at `Irora-dev/suite-md-files`. Access key files:

```bash
# Design System (colors, typography, spacing)
gh api repos/Irora-dev/suite-md-files/contents/design/DESIGN_SYSTEM.md --jq '.content' | base64 -d

# Component Library (buttons, cards, inputs)
gh api repos/Irora-dev/suite-md-files/contents/design/COMPONENT_LIBRARY.md --jq '.content' | base64 -d
```

Or via URL:
- https://raw.githubusercontent.com/Irora-dev/suite-md-files/main/design/DESIGN_SYSTEM.md
- https://raw.githubusercontent.com/Irora-dev/suite-md-files/main/design/COMPONENT_LIBRARY.md

### Theme: Cosmos (Default)

This app uses the **Cosmos** theme - a dark cosmic/nebula aesthetic. Key colors:

| Name | Hex | Usage |
|------|-----|-------|
| Cosmic Black | `#0A0A14` | Primary background |
| Card Background | `#1F1A33` | Cards, elevated surfaces |
| Nebula Purple | `#8C4DD9` | Primary buttons, actions |
| Nebula Cyan | `#40D9F2` | Success, completion |
| Nebula Lavender | `#B38CF2` | Secondary text |

### Using Specs

**Before building any UI:**
1. Check `DESIGN_SYSTEM.md` for colors, spacing, typography
2. Check `COMPONENT_LIBRARY.md` for existing component patterns
3. Use the exact patterns - don't invent new ones

**Example - Need a button?**
Don't create your own. Use the pattern from COMPONENT_LIBRARY.md:

```tsx
<button className="w-full py-4 bg-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-purple-600/40">
  Label
</button>
```

---

## First-Time Setup

If this is a new developer, guide them through setup step by step.

### Step 1: Check Prerequisites

Ask: "Have you set up your development environment? Do you have the following installed?"


**For Web development:**
- [ ] Node.js 18+ (check with `node --version`)
- [ ] npm (check with `npm --version`)

If missing, guide them:
1. "Go to https://nodejs.org and download the LTS version"
2. "Run the installer"
3. "Open a new terminal and verify with `node --version`"


### Step 2: Clone the Repository (if not already done)

```bash
gh repo clone Irora-dev/equity-perps-comparison
cd equity-perps-comparison
```

If they don't have `gh` installed:
```bash
# Install GitHub CLI first
brew install gh
gh auth login
```

### Step 3: Install Dependencies


```bash
npm install
```

This installs all dependencies defined in package.json.


### Step 4: Environment Setup


Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://prftfpyzugskjrdkzvcv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZnRmcHl6dWdza2pyZGt6dmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDg4MzUsImV4cCI6MjA4MjkyNDgzNX0.qVtS-1FdxOclLLpAO97JvL_22dFtJwFACtxLmEdKE18
NEXT_PUBLIC_APP_SLUG=equity-perps-comparison
```

**These are public keys - safe to use.** They connect to the shared backend.

### Step 5: Run the App


```bash
npm run dev
```

Open http://localhost:3000 in your browser. If you see the app, setup is complete!


### Step 6: Verify Backend Connection

Test the infrastructure:
1. Try signing up with a test email (use @test.com for testing)
2. Create a test entity
3. Check the console/logs for any errors

If you see errors about Supabase, double-check the configuration in Step 4.

---

## App Configuration

```typescript
// These are pre-configured - DO NOT CHANGE
APP_SLUG = "equity-perps-comparison"
APP_ID = "01fe201d-3779-41ae-9177-c4ca57919cb6"
SUPABASE_URL = "https://prftfpyzugskjrdkzvcv.supabase.co"
```

---

## How to Use the Backend

### Authentication

```tsx
import { useAuth } from '@repo/api-client';

function MyComponent() {
  const { user, signIn, signOut, isLoading } = useAuth();

  // Sign in
  await signIn(email, password);

  // Sign out
  await signOut();

  // Check if logged in
  if (user) { /* logged in */ }
}
```

### Storing Data

```tsx
import { useEntities } from '@repo/api-client';

// Define your type
interface YourModel {
  name: string;
  // ... your fields
}

function MyComponent() {
  const { data, create, update, remove } = useEntities<YourModel>('your_type', {
    appSlug: 'equity-perps-comparison'
  });

  // Create
  await create({ name: 'New item' });

  // Update
  await update(id, { name: 'Updated' });

  // Delete
  await remove(id);
}
```

### Checking Pro Status

```tsx
import { useSubscription } from '@repo/api-client';

function ProFeature() {
  const { isSubscribed, openCheckout } = useSubscription({ appSlug: 'equity-perps-comparison' });

  if (!isSubscribed) {
    return <button onClick={() => openCheckout()}>Upgrade to Pro</button>;
  }

  return <div>Pro content here</div>;
}
```

---

## Entity Types for This App

- (Check with infrastructure team for registered entity types)

Always use these exact type strings when creating entities.

---

## Project Structure

```
equity-perps-comparison/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   └── ...
├── components/                   # React components
├── lib/                         # Utilities
├── .env.local                   # Environment variables
└── spec.md                      # App specification
```

---

## Development Guidelines

1. **Read the spec first** - Check `spec.md` for feature requirements
2. **Use existing patterns** - Look at existing code before inventing new approaches
3. **Commit frequently** - Small, focused commits with clear messages
4. **Test before pushing** - Make sure the app compiles and runs
5. **Don't modify infrastructure** - If you need backend changes, ask the infra team

---

## Git Workflow & Push Reminders

### When to Commit and Push

**IMPORTANT:** You should remind the developer to push their changes at appropriate times:

| Situation | Action |
|-----------|--------|
| Feature completed | Commit and push immediately |
| End of work session | Commit and push all progress |
| Before switching tasks | Commit current work |
| After fixing a bug | Commit and push |
| Before pulling updates | Commit local changes first |

### Commands

```bash
# Before starting work
git pull

# After completing a feature or at session end
git add .
git commit -m "Add [feature name]"
git push
```

### Commit Message Format

Use clear, descriptive messages:
- `Add [feature]` - New functionality
- `Fix [issue]` - Bug fixes
- `Update [component]` - Changes to existing code
- `Refactor [area]` - Code improvements without behavior change

### Push Reminders

**As Claude, you should proactively remind the developer:**

1. **After completing any feature:** "This feature is complete. Would you like me to commit and push these changes?"

2. **After significant progress:** "We've made good progress on [feature]. It would be a good idea to commit and push now to save your work."

3. **Before ending a session:** "Before we wrap up, let's commit and push your changes so nothing is lost."

4. **If uncommitted changes accumulate:** "I notice we have several uncommitted changes. Would you like to commit and push now?"

**Never let a session end with unpushed work without reminding the developer.**

---

## Troubleshooting

### "Auth isn't working"
1. Check that Supabase URL and key are correct
2. Verify the Supabase client is initialized before use
3. Check network connectivity

### "I can't see my data"
This is expected! Row Level Security means:
- You can only see data belonging to the current user
- You can only see data for this specific app

This is a security feature, not a bug.

### "Build is failing"
1. Make sure all dependencies are installed
2. Check for syntax errors in recent changes
3. Try cleaning the build folder and rebuilding

### "I need something not covered here"
Contact the infrastructure team. Don't try to work around the system.

---

## Getting Help

- **Feature questions**: Check `spec.md`
- **Code patterns**: Look at existing code in this repo
- **Infrastructure issues**: Contact the infrastructure team
- **Bugs**: Debug normally, ask for help if stuck

---

*This app is part of the Irora platform. Infrastructure is managed centrally - you focus on building features.*

*Generated: 2026-01-03*
