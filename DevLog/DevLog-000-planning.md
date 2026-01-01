# DevLog 000: Project Planning & Architecture

**Project**: Quanta Crystals - Satirical Crystal Wellness Education Platform  
**Domain**: quantacrystals.org  
**Date**: 2026-01-01  
**Status**: Planning Phase

## Executive Summary

A satirical wellness website that uses the aesthetic and language of pseudoscientific crystal healing to actually educate the public about real laser crystals and scintillators used in fundamental physics research. The site will appear highly convincing at first glance but reveal its educational purpose through real crystal names, actual scientific applications, and gradual transition to legitimate research information.

## Project Goals

### Primary Objectives

1. Create a convincing "wellness" site that satirizes quantum pseudoscience
2. Educate visitors about real applications of laser crystals and scintillators
3. Raise awareness of fundamental research in particle physics and medical imaging
4. Demonstrate effective science communication through satire

### Success Metrics

- Visitor engagement and time on site
- Click-through to educational resources
- Social sharing (virality potential)
- Conversion to reading actual research papers

## Design Decisions

### Domain & Branding

- **Domain**: quantacrystals.org
- **Rationale**:
  - "Quanta" is real physics terminology (plural of quantum)
  - .org TLD provides pseudo-legitimacy and educational credibility
  - Short, memorable, professional-sounding
  - Real company (quantacrystals.com) exists in photonics industry, validating terminology

### Visual Design Philosophy

#### Color Palette

- **Primary**: Purple and blue (Ti:Sapphire aesthetic, laser vibes)
- **Accents**: Light yellow and orange (scintillator glow, Ce:LuAG luminescence)
- **Supporting**: Deep teals, holographic gradients, scientific whites
- **Mood**: Premium wellness brand meets high-tech laboratory

#### Typography Strategy

- Elegant serifs for "legitimacy" and wellness credibility
- Geometric sans-serifs for "scientific" authority
- Clean, modern, professional presentation

#### Visual Elements

- High-quality crystal photography (AI-generated or stock)
- Procedural 3D crystal models (Three.js)
- Subtle particle effects and energy field animations
- Dramatic lighting with lens flares for "energy emission" aesthetic
- Minimal shadows, premium product photography style

### Tone & Satire Level

**Target Level**: 8-9 out of 10 (where 10 is dangerously convincing)

**Strategy**:

- Use REAL crystal names (Ti:Sapphire, Ce:LuAG, YAG, etc.)
- Anyone with basic scientific knowledge will recognize legitimate materials
- Pseudoscientific claims are absurd enough to be obvious satire on close reading
- Gradual reveal: start convincing, transition to education
- All secondary links lead to legitimate scientific resources

**Copy Approach**:

- Liberal use of: "quantum," "frequency," "resonance," "coherence," "bioelectric field"
- Mix real scientific terms with wellness buzzwords
- Start 80% pseudoscience / 20% real science on landing page
- Increase real science ratio as users scroll and explore
- Include actual facts: "Used in $2B medical imaging industry" (true)

## Technical Architecture

### Framework & Technology Stack

#### Core Framework

- **Next.js 14+** with App Router
- **Rationale**:
  - Server-side rendering for SEO (helps spread the message)
  - Static export capability for GitHub Pages hosting
  - Excellent performance out of the box
  - Easy integration with 3D libraries

#### Styling & Animation

- **Tailwind CSS**: Utility-first styling, rapid development
- **Framer Motion**: Smooth animations and transitions
- **CSS Custom Properties**: Dynamic theming

#### 3D Rendering

- **Three.js** with procedural geometry (Option B)
- **Rationale**:
  - No dependency on external 3D model assets
  - Lightweight and performant
  - Full control over crystal appearance
  - Can upgrade to real models (.glb/.gltf) later if needed

#### Deployment & Hosting

- **GitHub Pages**: Free static hosting
- **Custom Domain**: quantacrystals.org via Cloudflare
- **Build**: Static export from Next.js

### Analytics & Tracking

#### Implemented Solutions

1. **Cloudflare Web Analytics** (Primary)
   - Free, included with domain
   - Privacy-focused, no cookies
   - Zero setup required
   - Basic but sufficient metrics

2. **Google Analytics 4** (Secondary)
   - Free, multi-property support
   - Familiar interface for site owner
   - More detailed user behavior tracking
   - Can track multiple sites from one account

#### Future Considerations

- Plausible or Umami (self-hosted) for enhanced privacy
- Custom event tracking for educational link clicks

## Content Strategy

### Featured Crystals

#### Flagship Product

**Ti:Sapphire (Titanium-doped Sapphire)**

- Real use: Ultrafast lasers, spectroscopy, medical imaging
- Visual: Pink-purple translucent crystal
- Primary focus for hero section and marketing

#### Secondary Focus

**Silicon**

- Expands beyond optics-focused crystals
- Ubiquitous in technology, relatable
- Bridge between exotic materials and everyday tech

#### Supporting Cast

- **Ce:LuAG**: Scintillator, yellow-green glow
- **YAG**: Laser crystals, dental applications
- **BGO**: PET scanners, particle physics
- **LYSO**: Medical imaging, dual rare-earth
- **BaF₂**: Fast scintillator, UV optics

### Website Structure

#### Landing Page Sections

1. **Hero Section**
   - 3D rotating Ti:Sapphire crystal
   - Dramatic headline: "The Crystalline Shield: Ancient Minerals, Modern Protection"
   - Subhead: "What Particle Physicists Have Known For Decades"

2. **The Problem** (5G, EMF, vague ominous statements)

3. **The Solution** (Scintillator pseudoscience)

4. **Crystal Profiles** (Individual cards with "benefits")

5. **Testimonials** (Fictional but plausible)

6. **The Science** (Links to actual research - educational pivot)

7. **Contact Us** (Email capture, "stay informed")

8. **Shop** (Coming Soon for MVP)

9. **Footer** (Tiny waiver, disclaimers)

#### Secondary Pages

- **/science**: Real educational content about scintillators and laser crystals
- **/research**: Links to CERN, Fermilab, medical imaging research
- **/about**: Reveals satirical nature, promotes science education
- **/crystals/[slug]**: Individual crystal detail pages

### Interactive Features (Future Phases)

- "Energy Calculator": Recommends crystal based on location (randomized)
- "Crystal Configurator": 3D viewer with particle effects
- "Research Library": Curated scientific papers
- Newsletter: Actually sends real science news

## Asset Requirements

### Images Needed

#### Hero Crystal (Ti:Sapphire)

**Prompt**: "A premium product photography shot of a titanium-doped sapphire crystal on a clean white surface with soft studio lighting. The crystal is rectangular/cylindrical, approximately 2-3 inches, with a distinctive pink-purple translucent color. Dramatic side lighting creates internal light refraction showing deep purples and blues. Minimal shadows, high-end commercial photography style, sharp focus, slight depth of field blur in background. Professional scientific equipment aesthetic meets luxury product photography."

**Alternative**: "A glowing titanium sapphire crystal levitating above a reflective white surface, emitting soft purple and blue luminescence. Studio photography with gradient background transitioning from deep purple to white. Ethereal light rays passing through the translucent pink crystal. Clean, modern, premium wellness brand aesthetic. Photorealistic, commercial product photography, cinematic lighting."

#### Scintillator Crystal (Ce:LuAG)

**Prompt**: "A cerium-doped lutetium aluminum garnet (Ce:LuAG) scintillator crystal on white background, cylindrical shape, clear/slightly yellow-green tint, catching light with subtle internal glow. Professional scientific photography, clean studio lighting, hints of yellow-orange luminescence. Premium laboratory equipment aesthetic, sharp focus, minimal composition."

### Logo/Icon

**Prompt**: "A minimalist geometric crystal icon logo with gradient colors. Hexagonal or octagonal crystal shape with clean facets, featuring purple-to-blue gradient with subtle yellow-orange accent highlights. Premium wellness brand aesthetic with sacred geometry influence. Soft glow or luminescence effect around the crystal. Modern, professional, suitable for conversion to SVG. White or transparent background, vector-ready design with smooth color transitions."

**Alternative**: "Letter Q formed by geometric crystal facets with holographic gradient colors. Purple, blue, and teal color scheme with hints of yellow-orange light. Clean angles, premium wellness tech brand aesthetic. Subtle energy glow or aura effect. Professional, modern, memorable. Vector-style illustration suitable for SVG, transparent background."

## Implementation Phases

### Phase 0: Foundation (Current)

- [x] Domain acquisition (quantacrystals.org)
- [x] Planning and architecture decisions
- [ ] Asset generation (images, logo)
- [ ] Repository setup
- [ ] Next.js project initialization

### Phase 1: MVP Core (Week 1)

**Goal**: Functional landing page with basic satire elements

#### Tasks

1. **Project Setup**
   - Initialize Next.js 14 with App Router
   - Configure Tailwind CSS
   - Set up static export for GitHub Pages
   - Configure custom domain routing

2. **Landing Page Structure**
   - Hero section with headline and subhead
   - Basic layout and responsive design
   - Footer with disclaimer
   - Navigation structure

3. **Basic Styling**
   - Implement color palette
   - Typography system
   - Component library foundation
   - Responsive breakpoints

4. **Content Integration**
   - Hero copy
   - Ti:Sapphire flagship content
   - Basic "benefits" claims
   - Footer waiver text

**Deliverable**: Static landing page deployable to GitHub Pages

### Phase 2: 3D & Interactivity (Week 2)

**Goal**: Add visual wow-factor and engagement

#### Tasks

1. **Three.js Integration**
   - Set up React Three Fiber
   - Create procedural crystal geometry
   - Implement rotation and lighting
   - Optimize performance

2. **Animations**
   - Framer Motion setup
   - Scroll-triggered animations
   - Particle effects system
   - Hover interactions

3. **Crystal Profiles**
   - Individual crystal cards
   - Modal or detail views
   - Image integration
   - Benefit listings

**Deliverable**: Interactive landing page with 3D crystal and animations

### Phase 3: Content Expansion (Week 3)

**Goal**: Build out full crystal lineup and educational pivot

#### Tasks

1. **Additional Crystals**
   - Ce:LuAG page/section
   - Silicon page/section
   - Supporting crystals (YAG, BGO, etc.)
   - Consistent formatting

2. **Educational Content**
   - /science page with real information
   - /research page with links to papers
   - /about page revealing satire
   - Curated external resources

3. **Testimonials Section**
   - Fictional testimonials
   - Plausible but absurd claims
   - Professional presentation

**Deliverable**: Full content site with educational resources

### Phase 4: Features & Polish (Week 4)

**Goal**: Add interactive features and final polish

#### Tasks

1. **Contact Form**
   - Email capture
   - Form validation
   - Integration with email service (optional)
   - Privacy policy

2. **Shop "Coming Soon"**
   - Placeholder page
   - Email notification signup
   - Product teasers

3. **Analytics Integration**
   - Cloudflare Analytics verification
   - Google Analytics 4 setup
   - Event tracking for educational links
   - Privacy compliance

4. **SEO & Meta**
   - Open Graph tags
   - Twitter cards
   - Sitemap generation
   - Meta descriptions

5. **Performance Optimization**
   - Image optimization
   - Code splitting
   - Lighthouse audit
   - Accessibility review

**Deliverable**: Production-ready site

### Phase 5: Launch & Iteration (Ongoing)

**Goal**: Deploy, monitor, and improve

#### Tasks

1. **Deployment**
   - GitHub Pages setup
   - Custom domain configuration
   - SSL/HTTPS verification
   - DNS propagation

2. **Testing**
   - Cross-browser testing
   - Mobile responsiveness
   - Performance benchmarks
   - User feedback collection

3. **Marketing Assets**
   - Social media preview images
   - Shareable graphics
   - Press kit (if needed)

4. **Monitoring**
   - Analytics review
   - User behavior analysis
   - Educational link click-through rates
   - Iterate based on data

**Deliverable**: Live site with ongoing improvements

## Future Enhancements (Post-MVP)

### Advanced Features

- Energy Calculator (location-based crystal recommendation)
- Crystal Configurator (interactive 3D viewer)
- Research Library (searchable paper database)
- Newsletter system (real science education)
- Blog/articles (ongoing science communication)

### Technical Improvements

- Upgrade to real 3D models (.glb/.gltf)
- Advanced particle systems
- WebGL shaders for crystal effects
- Progressive Web App (PWA) capabilities

### Content Expansion

- Video content (crystal demonstrations)
- Podcast/audio content
- Infographics about real applications
- Collaboration with science communicators

## Risk Mitigation

### Legal Considerations

- Clear disclaimers in footer
- Educational purpose clearly stated in /about
- No actual product sales (shop is "coming soon")
- Links to legitimate scientific resources
- Parody/satire protection (First Amendment)

### Trademark Concerns

- quantacrystals.com exists (photonics company)
- Different TLD (.org vs .com)
- Different industry (wellness vs B2B equipment)
- No trademark confusion likely
- Educational/satirical use protected

### Ethical Boundaries

- Satire level 8-9 is high but defensible
- Real crystal names make satire discoverable
- Educational content readily accessible
- No actual harm to public
- Promotes science literacy

## Success Criteria

### Minimum Viable Product (MVP)

- Functional landing page with Ti:Sapphire focus
- 3D crystal visualization
- Basic pseudoscience claims
- Educational links to real research
- Deployed to quantacrystals.org
- Mobile responsive
- Fast load times (< 3s)

### Long-term Success

- Viral sharing on social media
- Citations in science communication discussions
- Increased awareness of scintillator research
- Positive feedback from scientific community
- Educational impact measurable through analytics

## Next Steps

1. Generate assets using provided prompts (images, logo)
2. Initialize Next.js project with static export configuration
3. Set up GitHub repository and Pages deployment
4. Begin Phase 1 implementation (MVP Core)
5. Iterate based on asset availability and feedback

---

**End of DevLog 000**
