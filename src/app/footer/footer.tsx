import React from "react";
import { Link, Divider, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon icon="lucide:shopping-bag" width={24} height={24} />
              <span className="font-bold text-xl ml-2">BlueMart</span>
            </div>
            <p className="text-white/80 mb-4">
              Your one-stop destination for quality products at affordable prices.
            </p>
            <div className="flex gap-4">
              <Button isIconOnly size="sm" variant="flat" className="bg-white/10 text-white">
                <Icon icon="logos:facebook" width={18} />
              </Button>
              <Button isIconOnly size="sm" variant="flat" className="bg-white/10 text-white">
                <Icon icon="logos:instagram-icon" width={18} />
              </Button>
              <Button isIconOnly size="sm" variant="flat" className="bg-white/10 text-white">
                <Icon icon="logos:twitter" width={18} />
              </Button>
              <Button isIconOnly size="sm" variant="flat" className="bg-white/10 text-white">
                <Icon icon="logos:pinterest" width={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Shop</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Categories</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Deals</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/80 hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">FAQs</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Shipping Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Returns & Exchanges</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                classNames={{
                  inputWrapper: "bg-white/10 border-none",
                }}
              />
              <Button color="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Divider className="bg-white/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; 2024 BlueMart. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-white/70 text-sm hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-white/70 text-sm hover:text-white">Terms of Service</Link>
            <div className="flex items-center gap-2">
              <Icon icon="logos:visa" width={32} />
              <Icon icon="logos:mastercard" width={32} />
              <Icon icon="logos:paypal" width={32} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};