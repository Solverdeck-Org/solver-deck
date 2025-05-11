import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';

const StatsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg max-w-75 md:max-w-3xl mx-auto"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-[#193cb8] p-3 rounded-full">
          <User size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-3xl text-black font-bold">25</h3>
          <p className="text-sm text-[#193cb8]">Clients Worldwide</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="bg-[#193cb8] p-3 rounded-full">
          <Briefcase size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-3xl text-black font-bold">30</h3>
          <p className="text-sm text-[#193cb8]">Projects Completed</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;