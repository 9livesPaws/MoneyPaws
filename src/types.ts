export interface PersonalGoal {
  id: string;
  title: string;
  icon: string;
  rewardPaws: number;
  completed: boolean;
  streakDays?: number;
}

export interface Transaction {
  id: string;
  type: 
    | 'MINE_TAP' 
    | 'WALK' 
    | 'DAILY_LOGIN' 
    | 'GAME_FRUIT' 
    | 'GAME_SPIN' 
    | 'GAME_SCRATCH' 
    | 'WATCH_AD' 
    | 'REFERRAL' 
    | 'WITHDRAWAL' 
    | 'DAILY_MISSION' 
    | 'LUCKY_CHEST' 
    | 'TRIVIA' 
    | 'HABIT_GOAL' 
    | 'ACHIEVEMENT';
  amountPhp: number;
  title: string;
  timestamp: number;
  status: 'COMPLETED' | 'PROCESSING' | 'PENDING';
  payoutMethod?: string;
  accountNumber?: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: 'withdrawal' | 'mining' | 'pedometer' | 'referral' | 'other';
  message: string;
  userEmail: string;
  createdAt: number;
  status: 'OPEN' | 'INVESTIGATING' | 'RESOLVED';
}

export interface UserState {
  balancePhp: number;
  targetThresholdPhp: number;
  totalEarnedPhp: number;
  tapMineCount: number;
  stepsToday: number;
  stepsGoal: number;
  gamesPlayedToday: number;
  claimedMissionIds: string[];
  minerBatteryPercent: number;
  minerLastClaimed: number;
  consecutiveDays: number;
  lastCheckinDate: string;
  lastLuckyChestDate: string;
  freeSpins: number;
  freeScratchCards: number;
  adsWatchedToday: number;
  referralCode: string;
  referralCount: number;
  referralEarningsPhp: number;
  transactions: Transaction[];
  tickets: SupportTicket[];
  soundEnabled: boolean;
  theme: 'slate' | 'amoled';
  batterySaver: boolean;
  personalGoals: PersonalGoal[];
  triviaAnsweredDate: string;
  unlockedAchievementIds: string[];
  userName: string;
  userEmail: string;
}

// ADMOB LIVE NETWORK IDs
export const ADMOB_IDS = {
  publisherId: "pub-6655685917040449",
  bannerId: "ca-app-pub-6655685917040449/1985937373",
  interstitialId: "ca-app-pub-6655685917040449/6532163370",
  rewardedVideoId: "ca-app-pub-6655685917040449/3704097744"
};

// 95% PROFIT BASE MODEL - CONVERSION MULTIPLIERS
export const MONEY_PAWS_ECONOMICS = {
  coinToPhpRate: 0.001,             // 1,000 PawCoins = ₱1.00 PHP
  
  payoutTiersPhp:,
  bannerRefreshIntervalSeconds: 30, // Optimized 30s auto-refresh banner strategy
  rewards: {
    videoRewardCoins: 6,            // Video split payout: ₱0.006 (User 5% share)
    interstitialCoins: 3.5,         // Interstitial split payout: ₱0.0035
    bannerCoinsPerTick: 0.75,       // Banner view split payout: ₱0.00075
    walkStepsUnit: 250,             // Step unit block
    walkCoinsPerUnit: 1.5           // Conversion value per step block
  }
};

export const SUPPORT_EMAIL = 'moneypaws.app.help@gmail.com';
export const APP_MISSION = 'To provide users with passive daily income maybe not to pay giant bills, but to reliably help pay for small daily expenses like coffee, snacks, mobile load, and daily fares.';
