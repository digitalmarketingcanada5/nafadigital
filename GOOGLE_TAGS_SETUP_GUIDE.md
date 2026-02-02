# Google Tags Setup Guide

A complete guide to understanding and implementing Google Analytics 4 (GA4) and Google Ads tags on any website.

---

## Table of Contents

1. [What Are Google Tags?](#what-are-google-tags)
2. [Google Analytics 4 (GA4)](#google-analytics-4-ga4)
3. [Google Ads Tag](#google-ads-tag)
4. [Comparison: GA4 vs Google Ads Tag](#comparison-ga4-vs-google-ads-tag)
5. [Step-by-Step: Creating a GA4 Account](#step-by-step-creating-a-ga4-account)
6. [Step-by-Step: Creating a Google Ads Account](#step-by-step-creating-a-google-ads-account)
7. [Implementation Guide](#implementation-guide)
8. [Verification & Testing](#verification--testing)
9. [Best Practices](#best-practices)

---

## What Are Google Tags?

Google tags are small JavaScript code snippets that you add to your website to:

- **Track user behavior** (page views, clicks, scrolls)
- **Measure conversions** (purchases, sign-ups, form submissions)
- **Analyze traffic sources** (where visitors come from)
- **Optimize advertising** (retarget visitors, measure ad performance)

### The Two Main Google Tags

| Tag Type | ID Format | Primary Use |
|----------|-----------|-------------|
| Google Analytics 4 | `G-XXXXXXXXXX` | Website analytics & user behavior |
| Google Ads | `AW-XXXXXXXXXXX` | Advertising & conversion tracking |

---

## Google Analytics 4 (GA4)

### What is GA4?

Google Analytics 4 is Google's latest analytics platform that tracks and reports website traffic. It replaced Universal Analytics (UA) in July 2023.

### What GA4 Tracks

| Category | Metrics |
|----------|---------|
| **Traffic** | Page views, sessions, users, new vs returning visitors |
| **Engagement** | Time on page, scroll depth, clicks, video plays |
| **Acquisition** | Traffic sources (organic, paid, social, direct, referral) |
| **Demographics** | Age, gender, interests, location, language |
| **Technology** | Browser, device type, screen resolution, OS |
| **Behavior Flow** | User journey through your website |

### Key Benefits

1. **Understand Your Audience** - Know who visits your site, where they're from, what devices they use
2. **Track User Journey** - See how users navigate through your website
3. **Measure Content Performance** - Identify your best-performing pages
4. **Set Goals & Conversions** - Track form submissions, purchases, sign-ups
5. **Real-Time Data** - See who's on your site right now
6. **Free to Use** - No cost for standard features

### GA4 Dashboard Overview

Once set up, you can view:

```
Google Analytics Dashboard
├── Home (Overview & Insights)
├── Reports
│   ├── Realtime (Live visitors)
│   ├── Acquisition (Traffic sources)
│   ├── Engagement (User behavior)
│   ├── Monetization (Revenue tracking)
│   └── Retention (Returning users)
├── Explore (Custom reports)
├── Advertising (Campaign data)
└── Configure (Settings & events)
```

---

## Google Ads Tag

### What is Google Ads Tag?

The Google Ads tag (formerly AdWords tag) is used for:

- **Conversion Tracking** - Measure what happens after someone clicks your ad
- **Remarketing** - Show ads to people who visited your site
- **Audience Building** - Create targeted audience lists

### What Google Ads Tag Tracks

| Feature | Description |
|---------|-------------|
| **Conversions** | Purchases, sign-ups, calls, form submissions |
| **Remarketing Lists** | Visitors who viewed specific pages/products |
| **Dynamic Remarketing** | Show personalized ads with products they viewed |
| **Click Attribution** | Which ads led to conversions |

### Key Benefits

1. **Measure ROI** - Know exactly which ads drive sales
2. **Remarketing** - Re-engage visitors who didn't convert
3. **Optimize Campaigns** - Use data to improve ad performance
4. **Smart Bidding** - Let Google optimize bids based on conversion data
5. **Audience Insights** - Understand who converts best

### When You Need Google Ads Tag

- You're running Google Ads campaigns
- You want to track conversions from ads
- You want to create remarketing audiences
- You want to use Smart Bidding strategies

---

## Comparison: GA4 vs Google Ads Tag

| Feature | GA4 (G-XXXXXX) | Google Ads (AW-XXXXXX) |
|---------|----------------|------------------------|
| **Primary Purpose** | Analytics & reporting | Ad tracking & optimization |
| **Cost** | Free | Requires Google Ads spend |
| **Tracks All Traffic** | Yes | Only ad-related traffic |
| **Remarketing** | Limited | Full support |
| **Conversion Tracking** | Yes | Yes (more detailed for ads) |
| **Real-time Data** | Yes | Limited |
| **User Behavior** | Detailed | Basic |
| **E-commerce** | Full support | Conversion-focused |
| **Required For** | Any website analytics | Google Ads campaigns |

### Do You Need Both?

**Yes, if:**
- You run Google Ads campaigns AND want website analytics
- You want comprehensive data from both platforms

**GA4 Only, if:**
- You just want to understand your website traffic
- You're not running paid advertising

**Google Ads Only, if:**
- You only care about ad performance (rare - GA4 is recommended alongside)

---

## Step-by-Step: Creating a GA4 Account

### Step 1: Go to Google Analytics

1. Visit [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account (or create one)

### Step 2: Create an Account

1. Click **"Start measuring"** or **"Create Account"**
2. Enter an **Account name** (e.g., "My Company Analytics")
3. Configure data sharing settings (recommended: keep defaults)
4. Click **"Next"**

### Step 3: Create a Property

1. Enter **Property name** (e.g., "Hotel Booking Website")
2. Select your **Reporting time zone**
3. Select your **Currency**
4. Click **"Next"**

### Step 4: Business Details

1. Select your **Industry category**
2. Select your **Business size**
3. Click **"Next"**

### Step 5: Business Objectives

1. Select what you want to measure:
   - Get baseline reports
   - Understand user behavior
   - Generate leads
   - Drive online sales
   - Raise brand awareness
2. Click **"Create"**

### Step 6: Accept Terms

1. Select your country/region
2. Accept the Google Analytics Terms of Service
3. Accept the Data Processing Terms

### Step 7: Set Up Data Stream

1. Select platform: **Web**
2. Enter your **Website URL** (e.g., `https://www.hotelbooking.com`)
3. Enter a **Stream name** (e.g., "Hotel Booking Main Site")
4. Click **"Create stream"**

### Step 8: Get Your Measurement ID

After creating the stream, you'll see:

```
Measurement ID: G-XXXXXXXXXX
```

**Copy this ID** - you'll need it for implementation.

### Step 9: Get the Tag Code

1. In the Web stream details, find **"View tag instructions"**
2. Select **"Install manually"**
3. Copy the provided code snippet

---

## Step-by-Step: Creating a Google Ads Account

### Step 1: Go to Google Ads

1. Visit [ads.google.com](https://ads.google.com)
2. Click **"Start now"**
3. Sign in with your Google account

### Step 2: Set Up Your Account

1. Choose your main advertising goal:
   - Get more calls
   - Get more website sales or sign-ups
   - Get more visits to your physical location
   - Get more views on YouTube
2. Or click **"Switch to Expert Mode"** (recommended for developers)

### Step 3: Expert Mode Setup

1. Click **"Create an account without a campaign"**
2. Confirm your business information:
   - Billing country
   - Time zone
   - Currency
3. Click **"Submit"**

### Step 4: Get Your Conversion Tag

1. In Google Ads, go to **Tools & Settings** (wrench icon)
2. Under "Measurement", click **"Conversions"**
3. Click **"+ New conversion action"**
4. Select **"Website"**
5. Enter your website URL and click **"Scan"**
6. Choose **"Add a conversion action manually"**

### Step 5: Configure Conversion Action

1. **Goal category**: Select (e.g., "Submit lead form", "Purchase")
2. **Conversion name**: Enter a name (e.g., "Booking Completed")
3. **Value**: Set a value or leave as default
4. **Count**: "One" for leads, "Every" for purchases
5. Click **"Done"** then **"Save and continue"**

### Step 6: Get Your Tag

1. Select **"Install the tag yourself"**
2. You'll see your **Conversion ID**: `AW-XXXXXXXXXXX`
3. Copy the Google tag code provided

---

## Implementation Guide

### For Next.js Applications (App Router)

This is the recommended approach for Next.js 13+ with App Router.

#### Step 1: Locate Your Root Layout

Find your main layout file, typically at:
- `src/app/layout.tsx` or
- `src/app/(app)/layout.tsx`

#### Step 2: Add the Script Import

At the top of your layout file, add:

```tsx
import Script from "next/script";
```

#### Step 3: Add the Tags Inside `<head>`

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

#### Step 4: For Multiple Tags (GA4 + Google Ads)

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-XXXXXXXXXXX');
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Replace:**
- `G-XXXXXXXXXX` with your GA4 Measurement ID
- `AW-XXXXXXXXXXX` with your Google Ads Conversion ID

---

### For Next.js (Pages Router)

If using the older Pages Router, add to `pages/_app.tsx`:

```tsx
import Script from "next/script";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
```

---

### For Plain HTML Websites

Add this code right after the opening `<head>` tag in every HTML page:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XXXXXXXXXX');
    gtag('config', 'AW-XXXXXXXXXXX'); // Optional: Google Ads
  </script>

  <!-- Rest of your head content -->
  <title>My Website</title>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

---

### For React (Create React App / Vite)

Add to your `public/index.html` in the `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### For Vue.js

#### Option 1: In `index.html`

Add to `public/index.html` or `index.html`:

```html
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

#### Option 2: Using vue-gtag Plugin

```bash
npm install vue-gtag
```

```javascript
// main.js
import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';

const app = createApp(App);

app.use(VueGtag, {
  config: { id: 'G-XXXXXXXXXX' }
});

app.mount('#app');
```

---

### For Angular

Add to `src/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>

  <meta charset="utf-8">
  <title>My Angular App</title>
  <!-- ... -->
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

---

### Using Environment Variables (Recommended)

For better security and flexibility, use environment variables:

#### Next.js Example

1. Create `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXXX
```

2. Use in layout:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
  `}
</Script>
```

---

## Verification & Testing

### Method 1: Google Tag Assistant (Recommended)

1. Install **Tag Assistant Legacy** Chrome extension
2. Visit your website
3. Click the extension icon
4. Check if your tags are detected and firing correctly

### Method 2: Real-Time Reports

1. Go to [analytics.google.com](https://analytics.google.com)
2. Navigate to **Reports** → **Realtime**
3. Visit your website in another tab
4. You should see yourself as an active user

### Method 3: Browser Developer Tools

1. Open your website
2. Press `F12` to open Developer Tools
3. Go to **Network** tab
4. Filter by "gtag" or "google"
5. You should see requests to `googletagmanager.com`

### Method 4: Check Page Source

1. Right-click on your page → "View Page Source"
2. Search for your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Verify the script is present

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Tag not firing | Script not loaded | Check if script is in `<head>` |
| No real-time data | Wrong Measurement ID | Verify ID matches GA4 property |
| Double counting | Tag added twice | Check for duplicate scripts |
| Data delayed | Normal behavior | Wait 24-48 hours for full data |
| Console errors | Typo in code | Check for syntax errors |

---

## Best Practices

### 1. Use Environment Variables

Never hardcode IDs in production code. Use environment variables:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Load Scripts Efficiently

Use `strategy="afterInteractive"` in Next.js to not block page load:

```tsx
<Script
  src="..."
  strategy="afterInteractive"  // Loads after page is interactive
/>
```

### 3. Respect User Privacy

Consider adding a cookie consent banner and only load analytics after consent:

```tsx
{hasConsent && (
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
)}
```

### 4. Test Before Going Live

Always test on staging/development before production:

```tsx
const GA_ID = process.env.NODE_ENV === 'production'
  ? 'G-PROD-ID'
  : 'G-DEV-ID';
```

### 5. Set Up Conversions

Don't just track page views. Set up conversion events for:
- Form submissions
- Button clicks
- Purchases
- Sign-ups

### 6. Link GA4 and Google Ads

Link your accounts for better data:
1. In GA4, go to **Admin** → **Google Ads Links**
2. Click **Link**
3. Select your Google Ads account
4. Enable **Personalized Advertising**

### 7. Exclude Internal Traffic

Filter out your own visits:
1. In GA4, go to **Admin** → **Data Streams**
2. Select your stream → **Configure tag settings**
3. Click **Define internal traffic**
4. Add your IP address

---

## Quick Reference

### Tag Code Template

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');  // GA4
  gtag('config', 'AW-XXXXXXXXXXX'); // Google Ads (optional)
</script>
```

### Useful Links

| Resource | URL |
|----------|-----|
| Google Analytics | [analytics.google.com](https://analytics.google.com) |
| Google Ads | [ads.google.com](https://ads.google.com) |
| Tag Assistant | [tagassistant.google.com](https://tagassistant.google.com) |
| GA4 Documentation | [developers.google.com/analytics](https://developers.google.com/analytics) |

---

## Example: Hotel Booking App Implementation

For your hotel booking app, here's a complete implementation:

### 1. Create Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXXX
```

### 2. Update Root Layout

```tsx
// src/app/layout.tsx
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 3. Track Custom Events (Optional)

Track specific actions like bookings:

```tsx
// When a booking is completed
const trackBooking = (bookingValue: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // GA4 Event
    window.gtag('event', 'purchase', {
      transaction_id: 'BOOKING_123',
      value: bookingValue,
      currency: 'CAD',
    });

    // Google Ads Conversion
    window.gtag('event', 'conversion', {
      send_to: 'AW-XXXXXXXXXXX/CONVERSION_LABEL',
      value: bookingValue,
      currency: 'CAD',
    });
  }
};
```

### 4. Add TypeScript Types

Create `src/types/gtag.d.ts`:

```typescript
interface Window {
  gtag: (
    command: 'config' | 'event' | 'js',
    targetId: string | Date,
    config?: Record<string, unknown>
  ) => void;
  dataLayer: unknown[];
}
```

---

*Document created for AdsOnline - December 2024*
