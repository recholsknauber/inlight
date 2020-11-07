DROP TABLE PDX_ECON.EARNINGS_EMPLOYMENT_JOIN IF EXISTS;
CREATE TEMP TABLE PDX_ECON.EARNINGS_EMPLOYMENT_JOIN as (
SELECT ea.MONTH, emp.UNEMPLOYMENT_RATE, ea.MANUFACTURING, ea.CONSTRUCTION, ea.LEISURE_HOSPITALITY, ea.FINANCIAL, ea.TRADE_TRANSPORT_UTILITY, ea.SERVICES_EDUCATION_HEALTH, ea.INFORMATION, ea.SERVICES_PROFESSIONAL_BUSINESS, ea.GOVERNMENT, ea.OTHER
FROM PDX_ECON.EARNINGS_PORTLAND as ea
LEFT JOIN PDX_ECON.EMPLOYMENT_PORTLAND as emp
ON ea.MONTH = emp.MONTH
ORDER BY ea.MONTH desc
);

SELECT * FROM PDX_ECON.EARNINGS_EMPLOYMENT_JOIN;
