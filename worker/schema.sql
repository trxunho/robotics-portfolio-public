CREATE TABLE IF NOT EXISTS visits (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  ts      INTEGER NOT NULL,                     -- 访问时间（epoch 毫秒）
  ip      TEXT NOT NULL DEFAULT '',             -- 访客真实 IP
  country TEXT,                                 -- 国家（ISO 代码，如 CN）
  region  TEXT,                                 -- 省/州
  city    TEXT,                                 -- 城市
  path    TEXT,                                 -- 被访问页面路径
  referrer TEXT,                                -- 来源页
  ua      TEXT                                  -- User-Agent
);

CREATE INDEX IF NOT EXISTS idx_visits_ts ON visits(ts);
CREATE INDEX IF NOT EXISTS idx_visits_ip ON visits(ip);
