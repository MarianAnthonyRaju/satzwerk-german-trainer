// Bilingual phrase banks. Each entry is a German / English pair.
const pairs=s=>s.trim().split('\n').map(x=>x.split('|'));
const daily=pairs(`heute|today
morgen|tomorrow
am Montag|on Monday
am Dienstag|on Tuesday
am Mittwoch|on Wednesday
am Donnerstag|on Thursday
am Freitag|on Friday
am Samstag|on Saturday
am Sonntag|on Sunday
heute Morgen|this morning
heute Abend|this evening
morgen früh|early tomorrow
morgen Abend|tomorrow evening
am Wochenende|at the weekend
nach der Arbeit|after work
vor der Arbeit|before work
in der Mittagspause|during the lunch break
nach dem Frühstück|after breakfast
vor dem Abendessen|before dinner
später|later
jede Woche|every week
jeden Tag|every day
am Nachmittag|in the afternoon
am Vormittag|in the morning
nach dem Unterricht|after class`);
const food=pairs(`Brot|bread
Milch|milk
Käse|cheese
Reis|rice
Nudeln|pasta
Äpfel|apples
Birnen|pears
Bananen|bananas
Orangen|oranges
Kartoffeln|potatoes
Tomaten|tomatoes
Gurken|cucumbers
Karotten|carrots
Zwiebeln|onions
Eier|eggs
Butter|butter
Joghurt|yogurt
Mehl|flour
Zucker|sugar
Salz|salt
Tee|tea
Kaffee|coffee
Wasser|water
Saft|juice
Erdbeeren|strawberries`);
const things=pairs(`das Buch|the book
die Zeitung|the newspaper
den Brief|the letter
die E-Mail|the email
den Bericht|the report
die Nachricht|the message
den Artikel|the article
die Anleitung|the instructions
das Rezept|the recipe
den Text|the text
die Geschichte|the story
die Notiz|the note
die Liste|the list
den Vertrag|the contract
das Dokument|the document
den Plan|the plan
die Aufgabe|the task
die Frage|the question
die Antwort|the answer
das Formular|the form
die Einladung|the invitation
die Beschreibung|the description
das Angebot|the offer
den Entwurf|the draft
die Zusammenfassung|the summary`);
const past=pairs(`gestern|yesterday
vorgestern|the day before yesterday
letzte Woche|last week
letzten Monat|last month
letztes Jahr|last year
gestern Morgen|yesterday morning
gestern Abend|yesterday evening
letzten Montag|last Monday
letzten Dienstag|last Tuesday
letzten Mittwoch|last Wednesday
letzten Donnerstag|last Thursday
letzten Freitag|last Friday
letzten Samstag|last Saturday
letzten Sonntag|last Sunday
vor zwei Tagen|two days ago
vor drei Tagen|three days ago
vor einer Woche|a week ago
vor einem Monat|a month ago
vor einer Stunde|an hour ago
vor zwei Stunden|two hours ago
neulich|the other day
kürzlich|recently
heute Morgen|this morning
am vergangenen Wochenende|last weekend
vor dem Unterricht|before class`);
const context=pairs(`bei der nächsten Besprechung|at the next meeting
im nächsten Gespräch|in the next conversation
im Rahmen der Prüfung|as part of the review
im Rahmen der Planung|as part of the planning process
bei der nächsten Sitzung|at the next session
in der Arbeitsgruppe|in the working group
im Team|within the team
bei der Auswertung|during the evaluation
in der nächsten Runde|in the next round
im weiteren Verlauf|as things progress
bei der weiteren Planung|during further planning
vor der Entscheidung|before the decision
vor der Abstimmung|before the vote
vor dem nächsten Schritt|before the next step
im Zuge der Vorbereitung|as part of the preparation
bei Bedarf|if necessary
unter diesen Umständen|under these circumstances
in diesem Zusammenhang|in this context
angesichts der Lage|given the situation
aus fachlicher Sicht|from a professional perspective
aus praktischer Sicht|from a practical perspective
mit Blick auf die Zukunft|with a view to the future
unter Berücksichtigung der Ergebnisse|taking the results into account
nach sorgfältiger Abwägung|after careful consideration
in Anbetracht der verfügbaren Informationen|in view of the available information`);
const abstract=pairs(`die Entscheidung|the decision
die Empfehlung|the recommendation
die Strategie|the strategy
die Planung|the planning
die Priorität|the priority
die Finanzierung|the funding
die Umsetzung|the implementation
die Maßnahme|the measure
die Vorgehensweise|the approach
die Zielsetzung|the objective
die Bewertung|the assessment
die Begründung|the justification
die Darstellung|the presentation
die Schlussfolgerung|the conclusion
die Annahme|the assumption
die Forderung|the demand
die Regelung|the regulation
die Vereinbarung|the agreement
die Auswertung|the evaluation
die Interpretation|the interpretation
die Reform|the reform
die Initiative|the initiative
die Änderung|the change
die Alternative|the alternative
die Lösung|the solution`);
const cap=s=>s[0].toUpperCase()+s.slice(1);
const low=s=>s[0].toLowerCase()+s.slice(1);
const make=(topic,en,de,bad,why,...alts)=>[topic,cap(en)+'.',cap(de)+'.',cap(bad)+'.',why,...alts.map(x=>cap(x)+'.')];
const templates={
A1:[
 (t,e,o,f)=>make('Verb position',`I buy ${f} ${e}`,`${t} kaufe ich ${o}`,`${t} ich kaufe ${o}`,'A time expression can occupy position one; the finite verb kaufe then precedes ich.',`Ich kaufe ${t} ${o}`),
 (t,e,o,f)=>make('Modal verbs',`We want to buy ${f} ${e}`,`Wir wollen ${t} ${o} kaufen`,`Wir ${t} wollen ${o} kaufen`,'Wollen is the conjugated verb in position two. Kaufen is the infinitive at the end.',`${t} wollen wir ${o} kaufen`),
 (t,e,o,f)=>make('Negation with nicht',`I am not buying ${f} ${e}`,`Ich kaufe ${t} ${o} nicht`,`Ich ${t} kaufe ${o} nicht`,'Kaufe belongs in position two. Nicht can negate the verb or the whole action.',`${t} kaufe ich ${o} nicht`),
 (t,e,o,f)=>make('Separable verbs',`I am shopping for ${f} ${e}`,`Ich kaufe ${t} ${o} ein`,`Ich einkaufe ${t} ${o}`,'Einkaufen separates into kaufe and ein in a main clause.',`${t} kaufe ich ${o} ein`)
],
A2:[
 (t,e,o,f)=>make('Perfect tense',`I read ${f} ${e}`,`${t} habe ich ${o} gelesen`,`${t} ich habe ${o} gelesen`,'The auxiliary habe is second; gelesen, the past participle, is at the end.',`Ich habe ${t} ${o} gelesen`),
 (t,e,o,f)=>make('Perfect tense',`We checked ${f} ${e}`,`Wir haben ${t} ${o} überprüft`,`Wir ${t} haben ${o} überprüft`,'The finite auxiliary haben comes second. The past participle überprüft comes at the end.',`${t} haben wir ${o} überprüft`),
 (t,e,o,f)=>make('Dass clauses',`I think that she read ${f} ${e}`,`Ich denke, dass sie ${t} ${o} gelesen hat`,`Ich denke, dass sie hat ${t} ${o} gelesen`,'Dass sends the finite auxiliary hat to the end.'),
 (t,e,o,f)=>make('Indirect questions',`I would like to know whether you read ${f} ${e}`,`Ich möchte wissen, ob du ${t} ${o} gelesen hast`,`Ich möchte wissen, ob hast du ${t} ${o} gelesen`,'Ob introduces an indirect yes/no question. The auxiliary hast comes last.'),
 (t,e,o,f)=>make('Because',`She is happy because she read ${f} ${e}`,`Sie freut sich, weil sie ${t} ${o} gelesen hat`,`Sie freut sich, weil sie hat ${t} ${o} gelesen`,'Weil introduces a subordinate clause with the finite auxiliary at the end.')
],
B1:[
 (t,e,o,f)=>make('Purpose',`We meet ${e} in order to discuss ${f}`,`Wir treffen uns ${t}, um ${o} zu besprechen`,`Wir treffen uns ${t}, um ${o} besprechen zu`,'Um ... zu expresses purpose. Zu precedes the infinitive besprechen.'),
 (t,e,o,f)=>make('Indirect questions',`I do not know whether we will discuss ${f} ${e}`,`Ich weiß nicht, ob wir ${t} ${o} besprechen werden`,`Ich weiß nicht, ob werden wir ${t} ${o} besprechen`,'Ob introduces an indirect question; the finite auxiliary werden comes last.'),
 (t,e,o,f)=>make('Even if',`Even if we discuss ${f} ${e}, questions will remain`,`Selbst wenn wir ${t} ${o} besprechen, bleiben Fragen offen`,`Selbst wenn wir ${t} ${o} besprechen, Fragen bleiben offen`,'A fronted subordinate clause occupies position one; bleiben follows immediately.'),
 (t,e,o,f)=>make('Passive voice',`We will discuss ${f} ${e}`,`${t} wird ${o} besprochen`,`${t} ${o} wird besprochen`,'The process passive uses werden and a participle; wird is in position two. The German sentence literally says that the item is being discussed.'),
 (t,e,o,f)=>make('Infinitive with zu',`We intend to discuss ${f} ${e}`,`Wir haben vor, ${t} ${o} zu besprechen`,`Wir haben vor, ${t} ${o} besprechen zu`,'Vorhaben takes an infinitive clause with zu before besprechen.')
],
B2:[
 (t,e,o,f)=>make('Passive with modals',`${f} must be reviewed ${e}`,`${t} muss ${o} überprüft werden`,`${t} muss ${o} werden überprüft`,'Modal muss is finite; the passive participle precedes werden.'),
 (t,e,o,f)=>make('Hypothetical suggestions',`It would be advisable to reconsider ${f} ${e}`,`Es wäre ratsam, ${t} ${o} zu überdenken`,`Es wäre ratsam, ${t} ${o} überdenken zu`,'Wäre is Konjunktiv II; zu comes before the infinitive überdenken.'),
 (t,e,o,f)=>make('Formal requests',`I would appreciate it if you could explain ${f} ${e}`,`Ich wäre Ihnen dankbar, wenn Sie ${t} ${o} erläutern könnten`,`Ich wäre Ihnen dankbar, wenn Sie könnten ${t} ${o} erläutern`,'In a wenn-clause the finite modal könnten follows the infinitive erläutern.'),
 (t,e,o,f)=>make('Whether or not',`Regardless of whether we discuss ${f} ${e}, the questions remain`,`Unabhängig davon, ob wir ${t} ${o} besprechen, bleiben die Fragen bestehen`,`Unabhängig davon, ob wir ${t} ${o} besprechen, die Fragen bleiben bestehen`,'The introductory clause fills the first position; bleiben is the main-clause verb in second position.'),
 (t,e,o,f)=>make('Passive infinitive',`We expect ${f} to be explained ${e}`,`Wir erwarten, dass ${o} ${t} erläutert wird`,`Wir erwarten, dass ${o} ${t} wird erläutert`,'In the dass-clause, the passive auxiliary wird follows the participle.')
],
C1:[
 (t,e,o,f)=>make('Formal passive alternative',`${f} is to be reviewed ${e}`,`${t} ist ${o} zu überprüfen`,`${t} ist ${o} überprüfen zu`,'Sein + zu-infinitive expresses necessity or possibility. Here it expresses a requirement.'),
 (t,e,o,f)=>make('Restrictive connectors',`It is questionable to what extent we can justify ${f} ${e}`,`Es ist fraglich, inwieweit wir ${t} ${o} rechtfertigen können`,`Es ist fraglich, inwieweit wir können ${t} ${o} rechtfertigen`,'Inwieweit introduces an indirect question; the modal können comes after the infinitive.'),
 (t,e,o,f)=>make('Konjunktiv I',`She says she will explain ${f} ${e}`,`Sie sagt, sie werde ${t} ${o} erläutern`,`Sie sagt, sie werde ${t} ${o} erläutert`,'Werde is Konjunktiv I of werden for reported speech. The future uses an infinitive.'),
 (t,e,o,f)=>make('Conditional inversion',`Should we reconsider ${f} ${e}, further questions may arise`,`Sollten wir ${t} ${o} überdenken, könnten weitere Fragen auftreten`,`Sollten wir ${t} ${o} überdenken, weitere Fragen könnten auftreten`,'A verb-first conditional replaces wenn; the finite main-clause verb follows the conditional.'),
 (t,e,o,f)=>make('Formal argumentation',`It cannot be ruled out that ${f} will be challenged ${e}`,`Es lässt sich nicht ausschließen, dass ${o} ${t} infrage gestellt wird`,`Es lässt sich nicht ausschließen, dass ${o} ${t} wird infrage gestellt`,'Sich lassen + infinitive expresses possibility. The subordinate passive auxiliary is final.'),
 (t,e,o,f)=>make('Nominal and verbal style',`Rather than merely discussing ${f} ${e}, we should justify it`,`Anstatt ${t} ${o} lediglich zu besprechen, sollten wir sie begründen`,`Anstatt ${t} ${o} lediglich zu besprechen, wir sollten sie begründen`,'Anstatt ... zu introduces an alternative action. The main-clause finite verb follows this phrase.')
],
C2:[
 (t,e,o,f)=>make('Nuanced concession',`However plausible ${f} may seem ${e}, it still needs to be examined`,`So plausibel ${o} ${t} auch erscheinen mag, sie bedarf noch einer Prüfung`,`So plausibel ${o} ${t} auch mag erscheinen, sie bedarf noch einer Prüfung`,'The concessive so-clause ends with the finite modal mag; bedürfen governs the genitive.'),
 (t,e,o,f)=>make('Restrictive argumentation',`We should question ${f} ${e} only insofar as there are factual grounds for doing so`,`Wir sollten ${t} ${o} nur insofern infrage stellen, als sachliche Gründe dafür vorliegen`,`Wir sollten ${t} ${o} nur insofern infrage stellen, als liegen sachliche Gründe dafür vor`,'Insofern ... als limits the claim. The separable verb vorliegen stays together at the end.'),
 (t,e,o,f)=>make('Counterfactual inversion',`Were it necessary to reconsider ${f} ${e}, we would have to justify our approach`,`Wäre es erforderlich, ${t} ${o} zu überdenken, müssten wir unser Vorgehen begründen`,`Wäre es erforderlich, ${t} ${o} zu überdenken, wir müssten unser Vorgehen begründen`,'The conditional omits wenn and begins with wäre. The main clause starts with müssten.'),
 (t,e,o,f)=>make('Emphatic focus',`Only if we can justify ${f} ${e} can we draw a conclusion`,`Erst wenn wir ${t} ${o} begründen können, lässt sich eine Schlussfolgerung ziehen`,`Erst wenn wir ${t} ${o} begründen können, eine Schlussfolgerung lässt sich ziehen`,'Erst wenn introduces a prerequisite; the main clause begins with lässt, followed by the passive-like sich lassen construction.'),
 (t,e,o,f)=>make('Correlative structures',`It is less a question of whether we discuss ${f} ${e} than of how we justify it`,`Es geht weniger darum, ob wir ${t} ${o} besprechen, als vielmehr darum, wie wir sie begründen`,`Es geht weniger darum, ob wir ${t} ${o} besprechen, als vielmehr darum, wie begründen wir sie`,'Weniger ... als vielmehr shifts the focus. Both indirect questions use verb-final order.'),
 (t,e,o,f)=>make('Nuanced modal particles',`We could at least try to justify ${f} ${e}`,`Wir könnten doch zumindest versuchen, ${t} ${o} zu begründen`,`Wir könnten doch zumindest versuchen, ${t} ${o} begründen zu`,'Doch conveys an appeal to shared understanding; zumindest sets a minimum. The infinitive clause takes zu.')
]};
// Fix a question that was valid as an echo question, and a few misleading prompts.
lessons.A1[1][3]='Sprechst du Deutsch?';
lessons.B2[6][3]='Entweder fahren wir mit dem Zug oder wir das Auto nehmen.';
// Use literal passive translation and avoid unsuitable negation pattern.
templates.B1[3]=(t,e,o,f)=>make('Passive voice',`${f} is being discussed ${e}`,`${t} wird ${o} besprochen`,`${t} ${o} wird besprochen`,'The process passive uses werden plus the past participle. Wird is in position two.');
templates.A1[2]=(t,e,o,f)=>make('Verb position',`We are eating ${f} ${e}`,`${t} essen wir ${o}`,`${t} wir essen ${o}`,'A time expression can be first; the finite verb essen must come second.',`Wir essen ${t} ${o}`);
templates.A1[3]=(t,e,o,f)=>make('Modal verbs',`I have to buy ${f} ${e}`,`Ich muss ${t} ${o} kaufen`,`Ich ${t} muss ${o} kaufen`,'Muss comes in position two; kaufen remains an infinitive at the end.',`${t} muss ich ${o} kaufen`);
const targets={A1:1000,A2:1500,B1:2000,B2:2500,C1:3000,C2:3000};
for(const l of Object.keys(targets)){
 const times=l==='A1'?daily:l==='A2'?past:context, objects=l==='A1'?food:l==='A2'?things:abstract, ts=templates[l];
 const candidates=[];for(let i=0;i<times.length;i++)for(let j=0;j<objects.length;j++)for(let k=0;k<ts.length;k++){
  const [t,e]=times[i],[o,f]=objects[(j+i*7)%objects.length];
  // Avoid unnatural food+verb combinations (drinks are not normally eaten).
  if(l==='A1'&&k===2&&['Milch','Tee','Kaffee','Wasser','Saft','Mehl','Salz','Zucker','Butter','Öl'].includes(o))continue;
  const row=ts[k](t,e,o,f);candidates.push(row);
 }
 // Deterministic sampling across the full bank, with stable IDs across reloads.
 const seen=new Set(lessons[l].map(x=>x[2]));const unique=candidates.filter(r=>{if(seen.has(r[2]))return false;seen.add(r[2]);return true});
 const n=targets[l]-lessons[l].length;if(unique.length<n)throw Error('Insufficient candidates '+l);
 for(let i=0;i<n;i++)lessons[l].push(unique[Math.floor(i*unique.length/n)]);
}
