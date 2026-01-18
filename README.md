# Lakkaru Soft Technologies - Business Website

A professional business website built with React (Vite) and Tailwind CSS, designed to meet PayHere payment gateway compliance requirements.

## 🚀 Features

- Modern, responsive SaaS/Software agency design
- All PayHere-required compliance pages:
  - Terms and Conditions (with SLA, payment terms, IP rights)
  - Privacy Policy (PDPA compliant, PayHere PCI DSS mention)
  - Refund & Cancellation Policy
  - Contact Us (with physical address, email, phone)
  - About Us
  - Services with actual pricing

## 📋 Prerequisites

- Node.js 18+ (recommended: 20)
- npm or yarn
- Docker (for production deployment)

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🐳 Docker Deployment (Recommended for VPS)

### Option 1: Using Docker Compose (Easiest)

```bash
# Build and start the container
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t lakkaru-website .

# Run the container
docker run -d -p 80:80 --name lakkaru-web lakkaru-website

# Check if running
docker ps

# View logs
docker logs lakkaru-web
```

## 🖥️ VPS Deployment Guide

### Step 1: Prepare Your VPS

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add your user to docker group (optional, for running without sudo)
sudo usermod -aG docker $USER
```

### Step 2: Transfer Files to VPS

```bash
# From your local machine
scp -r ./* username@your-vps-ip:/home/username/lakkaru-website/
```

Or use Git:
```bash
# On VPS
git clone https://your-repo-url.git lakkaru-website
cd lakkaru-website
```

### Step 3: Deploy

```bash
cd lakkaru-website
docker-compose up -d --build
```

### Step 4: Setup SSL with Let's Encrypt (Recommended)

For production, you should use HTTPS. Here's a quick setup with Certbot:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Stop the container temporarily
docker-compose down

# Get SSL certificate
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com

# Update nginx.conf to use SSL, then restart
docker-compose up -d --build
```

### Step 5: Setup Auto-renewal for SSL

```bash
# Add to crontab
sudo crontab -e

# Add this line:
0 0 1 * * certbot renew --pre-hook "docker-compose -f /path/to/lakkaru-website/docker-compose.yml down" --post-hook "docker-compose -f /path/to/lakkaru-website/docker-compose.yml up -d"
```

## 📁 Project Structure

```
lakkaru-soft-technologies/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── TermsAndConditions.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── RefundPolicy.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## ✅ PayHere Compliance Checklist

- [x] **Terms and Conditions** - Includes SLA, payment terms, intellectual property rights
- [x] **Privacy Policy** - Data collection disclosure, PayHere PCI DSS compliance mention
- [x] **Refund Policy** - Clear conditions for refunds on software services
- [x] **Contact Page** - Physical address, business email, phone number
- [x] **About Us** - Company background and registration details
- [x] **Pricing Section** - Actual prices in LKR (not TBD or empty)
- [x] **Footer Links** - Clear navigation to all legal pages

## 🔧 Customization

### Update Company Information

Edit the following files to update your actual business details:
- `src/components/Footer.jsx` - Address, phone, email
- `src/pages/Contact.jsx` - Contact information
- `src/pages/About.jsx` - Company details, team members
- All legal pages - Update company name and registration number

### Update Pricing

Edit `src/pages/Services.jsx` to update your actual service prices.

### Update Colors

Modify `tailwind.config.js` to change the primary color scheme.

## 📞 Support

For technical support, contact:
- Email: info@lakkarusoft.lk
- Phone: +94 11 234 5678

## 📄 License

© 2026 Lakkaru Soft Technologies. All rights reserved.
