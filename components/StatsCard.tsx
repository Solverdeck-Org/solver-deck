import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';

const StatsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 bg-white p-8 rounded-2xl shadow-lg max-w-75 md:max-w-3xl mx-auto"
    >
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-3xl text-black font-bold">25+</h3>
          <p className="text-sm text-[#193cb8]">Active Projects</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-3xl text-black font-bold">30+</h3>
          <p className="text-sm text-[#193cb8]">Successful Conversions</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-3xl text-black font-bold">40+</h3>
          <p className="text-sm text-[#193cb8]">Satisfied Clients</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-3xl text-black font-bold">10+</h3>
          <p className="text-sm text-[#193cb8]">AI-Powered Decisions</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;