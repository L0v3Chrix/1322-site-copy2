# 1322 Legacy Strategies - Complete Image Generation Document

**Date:** December 9, 2025  
**Project:** 2025-11-1322-website-repositioning  
**Total Missing Images:** 19  
**Tool:** Nano Banana MCP (primary), OpenAI MCP (backup)  
**Priority:** P0 - Site has empty containers breaking the design

---

## INSTRUCTIONS FOR CLAUDE CODE

### Before You Start:
1. Read the design skill at `~/.claude/skills/design-excellence/SKILL.md` if available
2. Use **Nano Banana MCP** for ALL image generations
3. Save all images to `/public/images/`
4. After generating, verify each image loads correctly in the browser (`npm run dev`)
5. If an image doesn't match brand aesthetic, iterate conversationally:
   - "make it warmer"
   - "add more gold tones"
   - "soften the lighting"
   - "make it feel more classical, less corporate"

### Brand Guidelines:
- **Primary Colors:** Navy (#2C3E50), Cream (#F5F0E6), Gold (#C49A6C), Copper, Olive
- **Aesthetic:** "Principled Authority" - warm, classical, professional, faith-forward
- **Mood:** Timeless, trustworthy, generational, dignified, NOT cold/corporate/sterile
- **Lighting:** ALWAYS warm - golden hour, soft natural light, avoid harsh/clinical/fluorescent
- **Typography Context:** Libre Baskerville (headings), Lora (body) - classical feel

### Nano Banana Prompting Best Practices:
1. Use descriptive narrative prompts, NOT tag lists
2. Always specify lighting direction and temperature
3. Include negative constraints ("avoid: ...")
4. Iterate conversationally if 80% correct - don't regenerate from scratch
5. Use camera/photography terminology for better results

### Image Naming Convention:
- All filenames: lowercase, hyphenated, descriptive
- Format: `{section}-{description}.png`

---

## HOMEPAGE — 8 IMAGES (P0 CRITICAL)

These containers are currently empty and breaking the homepage design.

---

### 1. classical-foundation.png
**Location:** Hero background  
**Container Size:** 1920x1080  
**CSS:** `object-cover`, `opacity-20`

```
Abstract architectural detail of classical marble columns and stonework, partial view of ancient Greek or Roman foundation, warm golden hour sunlight casting long shadows across weathered cream-colored stone, subtle navy blue shadows in crevices, atmospheric haze suggesting timelessness, no people, no text, professional architectural photography with shallow depth of field, enduring and permanent aesthetic, avoid: modern elements, harsh lighting, full building view, cold tones
```

---

### 2. pillar-stewardship.png
**Location:** Three Pillars section (Pillar 1)  
**Container Size:** 1200x800  
**CSS:** `h-[500px]`, `object-cover`

```
A distinguished Christian business owner in his early 50s reviewing financial documents at an elegant mahogany desk, warm golden afternoon light streaming through tall windows behind him creating rim lighting, navy blue suit with subtle gold pocket square, reading glasses resting in hand, serious but hopeful expression conveying wisdom, classical study setting with leather-bound books and brass lamp visible, professional corporate portrait photography, shallow depth of field, cream and navy color palette throughout, avoid: generic stock photo feel, cold fluorescent lighting, cluttered modern office, smiling directly at camera
```

---

### 3. pillar-sovereignty.png
**Location:** Three Pillars section (Pillar 2)  
**Container Size:** 1200x800  
**CSS:** `h-[500px]`, `object-cover`

```
Aerial golden hour view of a family-owned commercial property or small business campus, well-maintained brick building with white trim surrounded by established oak trees casting long shadows across manicured lawn, gravel parking area with a few work trucks, sense of permanence and generational ownership, warm sunlight creating golden highlights with navy blue shadows, American small town prosperity and independence feel, professional drone photography style, cinematic composition, avoid: big box retail, industrial parks, harsh midday lighting, urban density, chain businesses
```

---

### 4. pillar-system.png
**Location:** Three Pillars section (Pillar 3)  
**Container Size:** 1200x800  
**CSS:** `h-[500px]`, `object-cover`

```
Three generations of men standing together in a classical wood-paneled library - grandfather (70s) seated in leather wingback chair, father (45) standing with hand on chair, adult son (25) standing beside them, all wearing navy suits with varying gold accents, warm golden lighting from large window illuminating their faces, leather-bound books and family portraits visible on shelves behind, dignified relaxed poses conveying legacy and continuity, professional family portrait photography, shallow depth of field creating intimate feel, warm cream and gold tones throughout, avoid: stiff formal poses, cold lighting, generic studio background, forced smiles
```

---

### 5. story-plumbing.png
**Location:** Entrepreneur Stories section (Story 1)  
**Container Size:** 800x600  
**CSS:** `h-[300px]`, `object-cover`

```
Professional plumber business owner in his early 40s standing confidently next to his branded white work truck with door open, clean navy blue company polo shirt tucked in, tool belt visible, warm early morning golden light in suburban residential neighborhood, genuine proud smile showing success, wedding ring visible on hand resting on truck door, well-organized equipment visible inside truck, successful established local business owner aesthetic, professional lifestyle photography, warm color grading with navy and gold accents, avoid: dirty disheveled appearance, harsh midday shadows, generic stock photo pose, staged feeling
```

---

### 6. story-hvac.png
**Location:** Entrepreneur Stories section (Story 2)  
**Container Size:** 800x600  
**CSS:** `h-[300px]`, `object-cover`

```
HVAC company owner in his late 40s standing confidently in front of a fleet of three white service vans lined up behind him, professional navy polo shirt with subtle embroidered logo, Arizona desert landscape visible in background at golden hour with warm orange sky, arms crossed showing confidence and authority, established business owner presence, warm genuine expression, wedding ring visible, professional business portrait photography, shallow depth of field keeping focus on subject, avoid: harsh desert midday sun, sweaty appearance, industrial warehouse background, cold corporate feeling
```

---

### 7. story-coffee.png
**Location:** Entrepreneur Stories section (Story 3)  
**Container Size:** 800x600  
**CSS:** `h-[300px]`, `object-cover`

```
Female coffee roaster entrepreneur in her mid-30s standing proudly in her artisan roastery, wearing quality tan canvas apron over cream blouse, large copper industrial roasting equipment behind her with warm ambient glow, burlap bags of green coffee beans stacked nearby, warm tungsten lighting mixed with soft natural window light from left, passionate confident expression with genuine smile, craft business owner aesthetic, Colorado mountain morning light feeling through warehouse windows, professional lifestyle photography, shallow depth of field, avoid: hipster stereotypes cliches, dark moody lighting, messy cluttered workspace, too casual appearance
```

---

### 8. brad-raschke-founder.png
**Location:** Founder Section  
**Container Size:** 800x1000 (portrait orientation)  
**CSS:** `h-[600px]`, `object-cover`

```
Professional executive portrait of a confident male financial advisor in his late 40s, wearing tailored navy blue suit with subtle gold pocket square and cream dress shirt, seated comfortably in elegant tufted brown leather wingback chair, warm classical study setting with mahogany bookshelves containing leather-bound books behind him, golden side lighting from window creating dimensional warmth on face, genuine warm approachable smile conveying trustworthiness, wedding ring visible on relaxed hand, professional executive portrait photography, shallow depth of field blurring background, dignified yet personable and inviting, avoid: cold corporate sterility, harsh direct flash, generic gray backdrop, stiff posed feeling
```

---

## ABOUT PAGE — 2 IMAGES (P1)

---

### 9. family-generations.png
**Location:** Mission Section  
**Container Size:** 1200x800  
**CSS:** `h-[400px] md:h-[500px]`, `object-cover`  
**Note:** May already exist - verify before generating

```
Multi-generational family moment - grandmother, parents, and young children gathered around a dining table after a meal, warm golden evening light streaming through windows, everyone engaged in genuine conversation and laughter, sense of connection and legacy being passed down, classical American home setting with warm cream walls and wood accents, professional lifestyle photography capturing authentic moment, shallow depth of field, warm nostalgic color grading, avoid: posed stiff family portrait, cold lighting, modern minimalist setting, stock photo feeling
```

---

### 10. about-hero-legacy.png
**Location:** Hero section background (if implemented)  
**Container Size:** 1920x600  
**CSS:** Hero background with overlay

```
Abstract conceptual image of hands passing a golden key from older weathered hands to younger hands, warm soft lighting creating glow around the key, cream and navy blurred background, metaphor for legacy transfer and inheritance, professional commercial photography, shallow depth of field with key in sharp focus, warm gold and cream color palette, avoid: literal money or cash imagery, cold clinical lighting, generic handshake stock photo
```

---

## SERVICES PAGE — 4 IMAGES (P1)

**Note:** Check `/public/images/` - some may already exist with `-new.png` suffix

---

### 11. discovery-new.png
**Location:** Service Card  
**Container Size:** 600x400  
**Verify if exists before generating**

```
Two professionals in a warm consultation setting - advisor and client seated in leather chairs facing each other at slight angle, warm afternoon light from window, notepad and coffee cups visible on side table between them, engaged thoughtful conversation with client leaning in, classical office with cream walls and wood accents, professional lifestyle photography, warm intimate feeling of trust being built, avoid: cold conference room, laptop screens dominating, formal stiff posture, looking at camera
```

---

### 12. strategy-design-new.png
**Location:** Service Card  
**Container Size:** 600x400  
**Verify if exists before generating**

```
Close-up of hands working on financial strategy documents spread across a mahogany desk, gold fountain pen in hand mid-writing, warm overhead brass lamp lighting, policy illustrations and projection charts visible with numbers and graphs, sense of careful thoughtful planning and precision, professional commercial photography, shallow depth of field on hands and documents, warm cream paper tones with navy ink, gold pen catching light, avoid: computer screens, cold clinical lighting, generic messy paperwork
```

---

### 13. stewardship-partnership-new.png
**Location:** Service Card  
**Container Size:** 600x400  
**Verify if exists before generating**

```
Advisor and client shaking hands warmly in classical office setting, both smiling genuinely at each other not camera, sense of partnership agreement and trust established, warm golden afternoon light from large window behind creating rim lighting, classical office decor with bookshelves visible, professional lifestyle photography capturing authentic connection moment, warm color grading with cream and navy tones, avoid: formal stiff corporate handshake, cold lighting, staged stock photo feeling, looking at camera
```

---

### 14. legacy-preparation-new.png
**Location:** Service Card  
**Container Size:** 600x400  
**Verify if exists before generating**

```
Family gathered around advisor reviewing legacy documents together at dining table, multiple generations present - older parents and adult children in their 30s, warm living room or home study setting with family photos visible on wall, everyone engaged and collaborative pointing at documents, sense of important family decisions being made together, warm evening lighting from lamps, professional lifestyle photography, intimate trusted family planning moment, avoid: cold conference room, single person alone, formal stiff postures, office setting
```

---

## LEARN PAGES — 3 IMAGES (P2)

---

### 15. learn-hero-books.png
**Location:** Learning Center Hero background  
**Container Size:** 1920x600  
**CSS:** Hero with text overlay

```
Close-up of open leather-bound book with warm brass reading lamp light illuminating cream-colored pages, stack of other leather books with gold spine lettering nearby, classical dark wooden desk surface visible, warm golden lighting creating intimate study atmosphere, sense of deep learning wisdom and timeless knowledge, professional still life photography style, shallow depth of field with book pages in sharp focus, cream and gold warm tones throughout, avoid: modern tablet or laptop, cold library fluorescent lighting, generic colorful textbooks, cluttered composition
```

---

### 16. foundations-track-hero.png
**Location:** Foundations Track Header  
**Container Size:** 1200x400  
**CSS:** Section header background

```
Abstract architectural image of strong classical stone foundation with carved cornerstone visible showing Roman numerals, warm morning golden light casting long shadows across ancient weathered cream-colored stone blocks, sense of permanence solidity and strong foundation, architectural detail photography style, cream and gold stone tones with navy blue shadows in crevices, metaphor for building knowledge from solid fundamentals, avoid: construction site, modern concrete, harsh midday lighting, full building view
```

---

### 17. deep-dives-track-hero.png
**Location:** Deep Dives Track Header  
**Container Size:** 1200x400  
**CSS:** Section header background

```
Close-up of antique brass nautical compass on aged yellowed nautical map with navigation lines, warm golden candlelight or lantern light creating dramatic side lighting and brass reflections, sense of exploration navigation and going deeper into uncharted territory, professional still life photography, rich warm tones with navy blue shadows and gold brass highlights, metaphor for diving deep into complex topics with proper tools, avoid: modern GPS or scuba gear, cold blue lighting, cluttered busy composition
```

---

## TOOLS PAGE — 2 IMAGES (P2)

---

### 18. calculator-hero.png
**Location:** Tools Hero background  
**Container Size:** 1920x600  
**CSS:** Hero with text overlay

```
Elegant antique brass mechanical calculator or adding machine on polished mahogany desk with financial documents and ledger nearby, warm afternoon window light from side creating highlights on brass mechanisms, fountain pen and wire-frame reading glasses suggesting careful analysis, professional still life photography, warm golden cream tones with brass accents, sense of precision methodical calculation and timeless tools, avoid: modern digital calculator or computer, cold overhead lighting, cluttered messy desk, plastic objects
```

---

### 19. interest-bleed-visual.png
**Location:** Interest Bleed Calculator page  
**Container Size:** 800x600  
**CSS:** Inline illustration

```
Conceptual image of golden coins slowly flowing through an antique brass hourglass against soft navy blue background, warm dramatic side lighting creating golden glow on coins and glass, sense of money and time steadily slipping away grain by grain, professional conceptual still life photography, rich gold metallic tones against deep navy, metaphor for interest bleeding away over time unnoticed, avoid: literal paper dollar bills, cold clinical white lighting, cheesy stock photo money piles, green money color
```

---

## GENERATION PRIORITY ORDER

Execute in this order to get the site looking good fastest:

### Phase 1: Homepage (Do First)
1. classical-foundation.png
2. pillar-stewardship.png
3. pillar-sovereignty.png
4. pillar-system.png
5. story-plumbing.png
6. story-hvac.png
7. story-coffee.png
8. brad-raschke-founder.png

### Phase 2: About & Services
9. family-generations.png (verify first)
10. about-hero-legacy.png
11. discovery-new.png (verify first)
12. strategy-design-new.png (verify first)
13. stewardship-partnership-new.png (verify first)
14. legacy-preparation-new.png (verify first)

### Phase 3: Learn & Tools
15. learn-hero-books.png
16. foundations-track-hero.png
17. deep-dives-track-hero.png
18. calculator-hero.png
19. interest-bleed-visual.png

---

## POST-GENERATION CHECKLIST

After generating all images, verify:

- [ ] `npm run dev` - site runs without errors
- [ ] Homepage: All 8 containers display images (no gray boxes)
- [ ] About page: Mission section image loads
- [ ] Services page: All 4 service cards have images
- [ ] Learn pages: Headers have background images
- [ ] Tools page: Hero and calculator page have images
- [ ] Mobile: Images scale correctly on phone viewport
- [ ] Brand check: All images feel warm, classical, "Principled Authority"
- [ ] Performance: Run Lighthouse, check image optimization
- [ ] File sizes: Each image under 500KB ideally

---

## ITERATION EXAMPLES

If an image comes out wrong, iterate with Nano Banana conversationally:

**Too cold/corporate:**
> "Make the lighting much warmer, more golden hour feeling. Remove any harsh shadows. Add warmth to the color palette."

**Wrong mood:**
> "This feels too modern and sterile. Make it feel more classical, timeless, like it could be from a prestigious family office. Add wood and leather textures."

**People look wrong:**
> "The person looks too young. Age them to late 40s. Make their expression more dignified and wise, less casual."

**Composition issues:**
> "Move the subject to the left third of frame. Add more negative space on the right. Blur the background more."

---

## CSS CONTAINER PATTERNS

For reference, here's how images should be implemented:

```tsx
// Standard image container pattern
<div className="relative h-[500px] overflow-hidden rounded-sm">
  <OptimizedImage
    src="/images/pillar-stewardship.png"
    alt="Stewardship - Your Capital, Your Control"
    type="medium"
    className="w-full h-full object-cover"
  />
</div>

// Hero background pattern  
<div className="absolute inset-0 opacity-20">
  <OptimizedImage
    src="/images/classical-foundation.png"
    alt="Classical foundation"
    type="hero"
    className="w-full h-full object-cover"
  />
</div>
```

---

## NOTES

- All prompts written for Nano Banana MCP (Gemini 2.5 Flash Image)
- Can use OpenAI MCP as fallback if Nano Banana unavailable
- Brand colors: Navy #2C3E50, Cream #F5F0E6, Gold #C49A6C
- Site aesthetic: "Principled Authority" - warm, classical, trustworthy
- Target audience: Christian entrepreneurs, business owners, family-focused

---

*Document created: December 9, 2025*  
*For: Claude Code image generation task*  
*Project: 1322 Legacy Strategies Website Repositioning*
