import { 
  Package, 
  Box, 
  Layers, 
  Settings, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  ShoppingCart, 
  Hotel, 
  Church, 
  Star,
  LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  'package': Package,
  'box': Box,
  'layers': Layers,
  'settings': Settings,
  'database': Database,
  'globe': Globe,
  'smartphone': Smartphone,
  'monitor': Monitor,
  'cloud': Cloud,
  'shield': Shield,
  'zap': Zap,
  'users': Users,
  'shopping_cart': ShoppingCart,
  'hotel': Hotel,
  'church': Church,
  'star': Star,
  // Add more mappings as needed
};

export function getIcon(name: string | null | undefined): LucideIcon {
  if (!name) return Package;
  const normalizedName = name.toLowerCase().replace(/-/g, '_');
  return iconMap[normalizedName] || Package;
}
