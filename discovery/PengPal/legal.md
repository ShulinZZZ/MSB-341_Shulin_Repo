# PengPal China legal check

**Date:** Oct 29, 2026 (Sprint 4, week 1)
**Scope:** What the Shanghai and Chongqing pilot can legally do: paid local guides and licensing,
paying hosts, traveler safety and liability, and data.
**Caveat:** This is desk research from public sources, not legal advice. It cites national law and
Shanghai's local rules. Chongqing's local rules were not checked. Before PengPal handles real money
for in-person services, a Chinese lawyer or a licensed travel agency should review it (see Open
questions).

## Bottom line

**Paying an unlicensed local to show a traveler around is illegal in China as written, and PengPal
taking a cut could count as running a travel agency without a license.** The rules are rarely
enforced against individuals, and regulators are tolerating the growing "private companion"
(私人陪游) market for now. But the risk falls mainly on the hosts, who are Chinese residents, not
on PengPal.

**Deposits are not ruled out.** A fully refundable $10 deposit taken from a traveler outside China,
for an intro call or a place on a trip date, doesn't involve any service being delivered in China.

## 1. Paid local guides and licensing

**What the law says**

- **Guiding requires a license and an agency.** Anyone guiding needs a guide certificate (导游证).
  To get one, a person must pass the national exam and then sign a labor contract with a travel
  agency or register with a tourism industry organization (Tourism Law Art. 37). Guides "must be
  dispatched by a travel agency and may not privately take on guiding business" (导游和领队为旅游者提供服务必须接受旅行社委派，不得私自承揽导游和领队业务, Art. 40).
- **"Guiding" is defined broadly.** A guide is someone who provides travelers with "向导、讲解及相关旅游服务":
  showing the way, explaining sights, and related travel services (Regulations on Tour Guides
  Art. 2, revised 2017; Shanghai's rules Art. 2 use the same wording). Showing a traveler how to
  take the metro and where to eat probably counts as showing the way (向导).
- **Penalties for the individual:** Guiding without a certificate means an order to stop,
  confiscation of earnings, a fine of ¥1,000–10,000 (about $140–1,400), and public notice. A
  licensed guide who takes private business faces the same fine plus suspension or loss of the
  license (Tourism Law Art. 102).
- **Penalties for the business:** Recruiting, organizing or hosting travelers (招徕、组织、接待) needs a
  travel agency license (Art. 28). Doing it without one means confiscation of earnings and a fine
  of ¥10,000–100,000 (about $1,400–14,000), plus ¥2,000–20,000 for the people responsible
  (Art. 95). An agency also can't use unlicensed people as guides (Art. 96).
- **Shanghai** adds that certified guides apply to practice through a contracted agency or a
  registered industry organization, and that nobody without a guide certificate may guide
  (Shanghai Tour Guide Measures Arts. 5, 17, revised Nov 2018).

**How it works in practice**

- Paid private companions are common, mostly found on social media, and mostly unlicensed. State
  media and courts (Guangming Daily via a Henan court account, Dec 2024) say plainly that
  "privately taking on guiding business is illegal." The same coverage treats companions who
  "only keep you company" but also plan routes as guiding.
- Regulators are holding back for now. Jiangsu's consumer council said the market should be met
  with "cautious tolerance" (审慎包容) and called for guidance policies, and one expert called a
  blanket ban "unrealistic." I found no enforcement cases and no 2025–26 national rule specific to
  companions.
- The biggest problem regulators raise is that most deals are verbal, with no contract, so
  disputes and accidents are hard to resolve.

**What this means for PengPal**

- **Calling hosts "friends" or "helpers" instead of "guides" lowers the risk but doesn't remove
  it.** The test is what they do and whether they get paid, not what they're called.
- **The legally clean options are:**
  1. Recruit licensed guides, who are registered with an industry organization (Shanghai has
     English-speaking ones).
  2. Partner with a licensed Shanghai travel agency that dispatches the hosts. PengPal would be
     the front end and the agency the operator.
  3. Keep anything paid outside China: paid pre-trip video calls, where the host advises from
     home and doesn't accompany anyone.
- **Riskier options:** unlicensed hosts paid for in-person days (the current prototype's model).
  This is fine to show in a prototype, but it shouldn't run for real without option 1 or 2.

## 2. Paying hosts

- **Tax:** Money a host earns for work done in China is China-source income, no matter where the
  payer is (Individual Income Tax Regulations Art. 3, 2018). PengPal is abroad and won't withhold
  tax, so the host has to declare the income themselves, as labor income (劳务报酬), in their annual
  return (IIT Law: income with no withholding agent must be self-declared).
- **Getting money to hosts:** Wise can send yuan to a host's Alipay account, up to ¥50,000 per
  transfer. Individuals can convert up to $50,000 a year of foreign currency into yuan without
  extra paperwork. Pilot amounts are far below both limits. (Sources are provider and fintech
  guides. Check current terms.)
- **Travelers paying hosts directly by QR code:** Since March 2022, people whose payments show
  "clear signs of business activity" are supposed to use a business collection code, not a
  personal one (PBOC 银发〔2021〕259号). Personal codes still work, and a few payments won't
  trigger anything, but a host taking regular payments from strangers is exactly the pattern this
  rule targets.
- **For the pilot:** Pay hosts in a lump sum after the trip, put it in writing, and tell them the
  income is taxable.

## 3. Traveler safety and liability

- With no contract, it isn't clear who is responsible if something goes wrong. That is the main
  safety concern in the 2024 coverage. Unlicensed companions also raise privacy and personal
  safety risks for travelers.
- I didn't research PengPal's own liability under Chinese or US law. That is a gap.
- **Pilot safeguards** (good practice, not legal requirements):
  - A one-page written agreement for each match, covering what the host does and doesn't do,
    the price, cancellation, and that no one has to drive the other.
  - Verify host identity on a video call, without storing ID copies (see section 4).
  - Ask travelers to carry travel insurance. Meet in public places first. Give the traveler and
    host a shared emergency sheet (110 police, 120 ambulance, embassy number).
  - Offer a female host on request (T07 asked for this).

## 4. Data

- China's privacy law (PIPL) reaches companies outside China when they handle the data of people
  in China in order to offer them a service (Art. 3). That covers PengPal's Shanghai hosts.
  Companies covered this way are supposed to name a representative in China (Art. 53). In
  practice, a hand-matched pilot with 3 hosts is far below anyone's radar. The rule matters once
  PengPal is a real platform.
- Cross-border transfer rules (security assessment, standard contract) don't apply below
  100,000 people a year for non-sensitive data, or below 10,000 for sensitive data (CAC
  Provisions, March 2024). National ID numbers count as sensitive.
- **For the pilot:**
  - Collect only a first name, WeChat ID, languages and experience from hosts. No ID numbers
    or ID photos.
  - Get each host's written consent to share their profile with travelers.
  - Keep real names and contact details out of this repo, which `hosts.md` already does.

## What PengPal can and can't do in the Sprint 4 pilot

| | Verdict |
|---|---|
| Show paid hosts and the all-in price in the prototype | **Yes.** It's a prototype and nothing is sold. |
| Ask travelers for a fully refundable $10 deposit | **Yes**, if it's described as refundable and as holding a trip date or an intro call. Refund it if no match happens. |
| Book free intro calls between travelers and hosts | **Yes.** No guiding and no payment. |
| Paid pre-trip video calls with a host | **Probably yes.** Advice given from home isn't on-site guiding. |
| Unlicensed hosts paid to accompany travelers in Shanghai | **No, not as written.** Wait for a licensed guide, an agency partner or a lawyer's opinion. |
| Recruit 3 hosts and log them without names | **Yes.** Recruiting isn't illegal, but tell hosts about the licensing issue. |

**Effect on the Sprint 4 plan:** The deposit test can go ahead. The commitment asked of travelers
should be a refundable deposit or a free intro call, not a paid in-person day. In host
recruitment, ask whether each candidate already holds a guide certificate.

## Open questions

1. Is a paid companion who only helps with daily life (paying, the metro, ordering food), with
   no sightseeing commentary, guiding under Art. 2? Ask a Chinese lawyer or the Shanghai Culture
   and Tourism Bureau.
2. Would a licensed Shanghai agency dispatch PengPal hosts, and on what split?
3. Do Chongqing's local rules add anything?
4. What are PengPal's liability and consumer-law duties in the US, where the deposit is taken?
5. Do any 2025–26 rule changes on companions or the Tourism Law exist that these searches missed?

## Sources

- [Tourism Law of the PRC, official text, 2018 amendment](https://zwgk.mct.gov.cn/zfxxgkml/zcfg/fl/202105/t20210526_924763.html) (Ministry of Culture and Tourism): Arts. 28, 29, 37–41, 95, 96, 102
- [Regulations on Tour Guides (导游人员管理条例), State Council, 2017 revision](https://www.gov.cn/gongbao/content/2019/content_5468862.htm): Art. 2 definition
- [Measures for Tour Guides (导游管理办法), CNTA Order 44, in force Jan 1, 2018](https://whlyj.sh.gov.cn/zcfg/20171211/0022-23741.html), with [Shanghai's explainer](https://whlyj.sh.gov.cn/zcjd/20180208/0022-34694.html)
- [Shanghai Tour Guide Measures (上海市导游人员管理办法), 2018 revision](https://www.shanghai.gov.cn/xxzfgzwj/20210608/661ef9b64cf84200b143879c517c1d10.html)
- [MCT notice on the freelance-guide pilot (导游自由执业试点)](https://www.shanghaiinvest.com/cn/viewfile.php?id=10711) (secondary copy)
- [“私人陪游”火了，但私自承揽业务属违法！ The Paper, Dec 13, 2024](https://m.thepaper.cn/newsDetail_forward_29643837)
- [旅行路线可定制，“私人陪游”靠谱吗？ Guangming Daily, Dec 15, 2024](https://m.gmw.cn/2024-12/15/content_1303923460.htm)
- [Jiangsu consumer council on private companions, Sohu, Dec 2024](https://www.sohu.com/a/837899487_121284943)
- [Individual Income Tax Law Implementation Regulations, 2018, Art. 3](https://fgk.chinatax.gov.cn/zcfgk/c100010/c5194444/content.html) (State Taxation Administration)
- [PBOC rules on personal and business collection codes, Xinhua, Mar 2022](https://www.news.cn/politics/2022-03/01/c_1128424805.htm)
- [How to pay in China as a foreigner, Wise](https://wise.com/en-cn/blog/how-to-pay-in-china-as-a-foreigner), and [paying contractors in China, Avvio](https://avvio.xyz/blog/pay-contractors-in-china/) (secondary sources; check current limits)
- [PIPL extraterritorial scope, Arts. 3 and 53, IAPP](https://iapp.org/news/a/top-5-operational-impacts-of-chinas-pipl-part-1-scope-key-definitions-and-lawful-handling-of-personal-information)
- [China eases restrictions on cross-border data flows, Covington](https://www.insideprivacy.com/uncategorized/china-eases-restrictions-on-cross-border-data-flows/), and [Arnold & Porter, Nov 2025](https://www.arnoldporter.com/en/perspectives/advisories/2025/11/china-issues-clarifications-cross-border-data-transfer-rules)
- [Information about tour guides in China, Visit Beijing](https://english.visitbeijing.com.cn/article/47ON6cDV5vb)
