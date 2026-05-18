'use client';

import { colors } from '@/lib/colors';
import { personalConfig } from '@/config/personal';

export function Skills() {
  return (
    <div className="text-xs sm:text-sm py-1 space-y-2">
      {personalConfig.skillCategories.map((cat) => (
        <div key={cat.name}>
          <span style={{ color: cat.color }} className="font-bold">{cat.name}</span>
          <div className="pl-2 flex flex-wrap gap-x-3 gap-y-0.5">
            {cat.skills.map((skill) => (
              <span key={skill} style={{ color: colors.text }}>
                <span style={{ color: colors.inactive }}>▪ </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
