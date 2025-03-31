
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import ProductCard from '@/components/ProductCard';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import ScrollingTags from '@/components/ScrollingTags';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*, product_images(*)')
    .order('created_at', { ascending: false })
    .limit(8);
  
  if (error) throw error;
  return data;
};

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['featured-products'],
    queryFn: fetchProducts,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <FeaturedCarousel />
      
      <div className="my-12 text-center">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to TradeMarket
        </motion.h1>
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover a smarter way to shop with our AI-powered platform
        </motion.p>
        
        <ScrollingTags />
      </div>
      
      <section className="my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Button variant="link">View All</Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            Failed to load products. Please try again later.
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {products?.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard 
                  product={product} 
                  layoutId={`product-${product.id}`}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
      
      <section className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg p-8"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-semibold mb-3">AI-Powered Shopping</h3>
            <p className="mb-4">Our advanced AI algorithms analyze your preferences to offer personalized product recommendations.</p>
            <Button variant="secondary">Explore Features</Button>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-8"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-semibold mb-3">Multi-Search Technology</h3>
            <p className="mb-4">Find exactly what you're looking for across different categories with our smart search technology.</p>
            <Button variant="secondary">Try It Now</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
