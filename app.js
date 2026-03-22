// ═══ DB ═══
const DB = {
  get(k,def){try{const v=JSON.parse(localStorage.getItem('ll_'+k));return v!==null?v:def;}catch{return def;}},
  set(k,v){localStorage.setItem('ll_'+k,JSON.stringify(v));}
};

// ═══ SEED DATA ═══
const USERS_META = {
  Ham:  {color:'#7c6dfa',bg:'rgba(124,109,250,.15)'},
  Bassi:{color:'#3ecf7e',bg:'rgba(62,207,126,.15)'},
  Jana: {color:'#f5a623',bg:'rgba(245,166,35,.15)'}
};
const SEED_DATA = {"Ham":[{"id":"6923206a552af67f1e0fa518","name":"Leg Day 1","date":"2025-11-23T14:55:37.077Z","duration":0,"exercises":[{"id":"692323fda0a1977d81574b06","name":"Sissy Squat","type":"bodyweight","sets":[{"reps":15,"weight":null,"rpe":"max_effort","notes":null},{"reps":12,"weight":null,"rpe":"max_effort","notes":null},{"reps":12,"weight":null,"rpe":"max_effort","notes":null}]},{"id":"692320878a4a440b08890aa0","name":"Bulgarian Split Squat","type":"strength","sets":[{"reps":12,"weight":19.96,"rpe":"challenging","notes":null},{"reps":12,"weight":19.96,"rpe":"moderate","notes":null},{"reps":12,"weight":19.96,"rpe":"challenging","notes":null}]},{"id":"692326ea40e9688b2b78e001","name":"Single Leg Curl","type":"strength","sets":[{"reps":7,"weight":54.43,"rpe":"challenging","notes":null},{"reps":10,"weight":49.9,"rpe":"max_effort","notes":null},{"reps":10,"weight":49.9,"rpe":"max_effort","notes":null}]},{"id":"69232a5d0b49d8c4e920c89a","name":"Single Leg Extension","type":"strength","sets":[{"reps":12,"weight":36.29,"rpe":"easy","notes":null},{"reps":10,"weight":45.36,"rpe":"max_effort","notes":null},{"reps":9,"weight":45.36,"rpe":"max_effort","notes":null}]},{"id":"69232d825c3436f7fed3aa10","name":"Jump Squats","type":"bodyweight","sets":[{"reps":15,"weight":null,"rpe":"moderate","notes":null},{"reps":15,"weight":null,"rpe":"challenging","notes":null},{"reps":15,"weight":null,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"69249451338315a761da8103","name":"Push Day 1","date":"2025-11-24T17:22:25.342Z","duration":0,"exercises":[{"id":"691e92b7616cadd342bcad18","name":"Incline Dumbbell Bench Press Machine","type":"strength","sets":[{"reps":12,"weight":68.04,"rpe":"moderate","notes":null},{"reps":12,"weight":72.57,"rpe":"moderate","notes":null},{"reps":9,"weight":77.11,"rpe":"max_effort","notes":null}]},{"id":"692496eb92f7e2d9a7d4ebbf","name":"Bench Press Machine","type":"strength","sets":[{"reps":7,"weight":77.11,"rpe":"max_effort","notes":null},{"reps":8,"weight":72.57,"rpe":"challenging","notes":null},{"reps":8,"weight":72.57,"rpe":"challenging","notes":null}]},{"id":"69249ad799a37da3f67283d1","name":"Cable Flyes (Chest Height)","type":"strength","sets":[{"reps":11,"weight":11.34,"rpe":"max_effort","notes":"Controlled Negative"},{"reps":9,"weight":11.34,"rpe":null,"notes":null},{"reps":9,"weight":11.34,"rpe":"max_effort","notes":null}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":15,"weight":4.54,"rpe":"challenging","notes":null},{"reps":15,"weight":4.54,"rpe":"challenging","notes":null},{"reps":15,"weight":4.54,"rpe":"challenging","notes":null}]},{"id":"6924a04e1ea8049956015529","name":"Single Cable Pushdown","type":"strength","sets":[{"reps":12,"weight":9.07,"rpe":"challenging","notes":null},{"reps":10,"weight":9.07,"rpe":"max_effort","notes":null},{"reps":9,"weight":9.07,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"6925eb1752eb2d78a81ff3b7","name":"Pull Day 1","date":"2025-11-25T17:44:55.555Z","duration":0,"exercises":[{"id":"6925f797e225533d5866569c","name":"Single Arm Cable Curl","type":"strength","sets":[{"reps":10,"weight":11.34,"rpe":null,"notes":null},{"reps":10,"weight":11.34,"rpe":"max_effort","notes":null},{"reps":8,"weight":13.61,"rpe":"max_effort","notes":null}]},{"id":"6925f4e4f62e7aae4847f533","name":"Reverse Grip Cable Curl","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"max_effort","notes":null},{"reps":14,"weight":24.95,"rpe":"max_effort","notes":null},{"reps":12,"weight":20.41,"rpe":"moderate","notes":null}]},{"id":"6925f06dbc98bf6420305c8a","name":"Single Arm Lat Pulldown","type":"strength","sets":[{"reps":10,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":10,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":12,"weight":22.68,"rpe":"max_effort","notes":"Cross body, twist"}]},{"id":"6925edacbeb4e75bca98ffac","name":"Single Arm Cable Row (Pronated)","type":"strength","sets":[{"reps":12,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":12,"weight":34.02,"rpe":"challenging","notes":null},{"reps":12,"weight":31.75,"rpe":"moderate","notes":null}]},{"id":"691e86cfd04f363597e3b35f","name":"Weighted Pull-Ups","type":"bodyweight","sets":[{"reps":8,"weight":null,"rpe":"max_effort","notes":null},{"reps":10,"weight":null,"rpe":"max_effort","notes":null},{"reps":12,"weight":null,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"69287d4f53f2588865cc80c1","name":"Leg Day","date":"2025-11-27T16:33:19.201Z","duration":0,"exercises":[{"id":"69287d33e82eedef5827bacc","name":"Cable Rope RDL","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":"moderate","notes":"Shit choice of exercise "},{"reps":12,"weight":31.75,"rpe":"moderate","notes":null},{"reps":12,"weight":31.75,"rpe":null,"notes":null}]},{"id":"692880222b368d7cb7e5ac6c","name":"Dumbbell Backward Lunge","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":"challenging","notes":null},{"reps":12,"weight":20.41,"rpe":"challenging","notes":null},{"reps":12,"weight":20.41,"rpe":"moderate","notes":null}]},{"id":"6928875a5cb53e9f3bc61418","name":"Leg Extension","type":"strength","sets":[{"reps":15,"weight":77.11,"rpe":"challenging","notes":null},{"reps":15,"weight":77.11,"rpe":"challenging","notes":null},{"reps":15,"weight":77.11,"rpe":"moderate","notes":null}]},{"id":"692883da82406fd1cc1577bc","name":"Leg Curl","type":"strength","sets":[{"reps":12,"weight":77.11,"rpe":"challenging","notes":null},{"reps":12,"weight":77.11,"rpe":"challenging","notes":null},{"reps":15,"weight":77.11,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"692dd6cf26578da5146173a5","name":"Push Day","date":"2025-12-01T17:56:30.763Z","duration":0,"exercises":[{"id":"692496eb92f7e2d9a7d4ebbf","name":"Bench Press Machine","type":"strength","sets":[{"reps":8,"weight":77.11,"rpe":"challenging","notes":"Seat high up"},{"reps":7,"weight":77.11,"rpe":"max_effort","notes":null},{"reps":6,"weight":77.11,"rpe":"max_effort","notes":null}]},{"id":"691e92b7616cadd342bcad18","name":"Incline Dumbbell Bench Press Machine","type":"strength","sets":[{"reps":5,"weight":68.04,"rpe":"max_effort","notes":null},{"reps":10,"weight":63.5,"rpe":"max_effort","notes":null},{"reps":8,"weight":68.04,"rpe":"max_effort","notes":null}]},{"id":"692cc3843d65db6d436faeae","name":"Cable Flyes (High to Low)","type":"strength","sets":[{"reps":10,"weight":13.61,"rpe":"moderate","notes":null},{"reps":12,"weight":13.61,"rpe":"max_effort","notes":null},{"reps":10,"weight":13.61,"rpe":"max_effort","notes":null}]},{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":7,"weight":68.04,"rpe":"max_effort","notes":null},{"reps":9,"weight":63.5,"rpe":"max_effort","notes":null},{"reps":8,"weight":63.5,"rpe":"max_effort","notes":null}]},{"id":"692de4f4c40616b1c0d0088e","name":"Tricep Cable Cross Body Pushdown","type":"strength","sets":[{"reps":11,"weight":6.8,"rpe":"max_effort","notes":null},{"reps":10,"weight":6.8,"rpe":"max_effort","notes":null},{"reps":10,"weight":6.8,"rpe":"max_effort","notes":null}]},{"id":"692661d5a0a5497741ee38c5","name":"Body weight dips (on dip bars)","type":"bodyweight","sets":[{"reps":8,"weight":null,"rpe":null,"notes":null},{"reps":7,"weight":null,"rpe":"max_effort","notes":null},{"reps":13,"weight":null,"rpe":"max_effort","notes":null}]},{"id":"692de7f1177e773ca119b45b","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":8,"weight":7.48,"rpe":null,"notes":null},{"reps":8,"weight":7.48,"rpe":"max_effort","notes":null}]},{"id":"691e8d51adc448d499dccd6d","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":10,"weight":20.41,"rpe":"max_effort","notes":null},{"reps":15,"weight":20.41,"rpe":"max_effort","notes":null},{"reps":15,"weight":20.41,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"6930831eb804e3313dff2b9d","name":"Pull Day","date":"2025-12-03T18:36:13.053Z","duration":0,"exercises":[{"id":"691e86cfd04f363597e3b35f","name":"Weighted Pull-Ups","type":"bodyweight","sets":[{"reps":9,"weight":null,"rpe":"max_effort","notes":null},{"reps":8,"weight":null,"rpe":"max_effort","notes":null},{"reps":12,"weight":null,"rpe":"max_effort","notes":null}]},{"id":"69308e46b838112486691c5f","name":"Dumbbell Spider Curl","type":"strength","sets":[{"reps":14,"weight":9.98,"rpe":"max_effort","notes":null},{"reps":14,"weight":9.98,"rpe":"max_effort","notes":null},{"reps":14,"weight":9.98,"rpe":null,"notes":null}]},{"id":"69308683099a6923768e6d31","name":"Single Arm Cable Row (Neutral)","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":"max_effort","notes":null},{"reps":12,"weight":31.75,"rpe":"max_effort","notes":null},{"reps":12,"weight":31.75,"rpe":"max_effort","notes":null}]},{"id":"69308927baea10b4c98f2f17","name":"Lat Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":"moderate","notes":null},{"reps":12,"weight":27.22,"rpe":"max_effort","notes":null},{"reps":9,"weight":27.22,"rpe":"max_effort","notes":null}]},{"id":"691e873a5b213efea6a181af","name":"Alternating Dumbbell Hammer curl","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":"challenging","notes":null},{"reps":12,"weight":20.41,"rpe":"max_effort","notes":null},{"reps":10,"weight":20.41,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"69333bb087f2c769721ef96e","name":"Leg Day","date":"2025-12-05T20:08:15.733Z","duration":0,"exercises":[{"id":"69232d825c3436f7fed3aa10","name":"Jump Squats","type":"bodyweight","sets":[{"reps":15,"weight":null,"rpe":"moderate","notes":null},{"reps":15,"weight":null,"rpe":"moderate","notes":null},{"reps":15,"weight":null,"rpe":"moderate","notes":null}]},{"id":"692326ea40e9688b2b78e001","name":"Single Leg Curl","type":"strength","sets":[{"reps":10,"weight":49.9,"rpe":"max_effort","notes":null},{"reps":12,"weight":49.9,"rpe":"max_effort","notes":null},{"reps":12,"weight":49.9,"rpe":"max_effort","notes":null}]},{"id":"69334287370fa95e898ec2cf","name":"Close Stance Goblet Squat","type":"strength","sets":[{"reps":15,"weight":20.41,"rpe":"max_effort","notes":null},{"reps":15,"weight":20.41,"rpe":"challenging","notes":null},{"reps":15,"weight":20.41,"rpe":"challenging","notes":null}]},{"id":"69333e9322cd8fb990d89ec7","name":"Dumbbell Sumo Squat","type":"strength","sets":[{"reps":15,"weight":20.41,"rpe":null,"notes":"[SUPERSET:ss_1764966225763]"},{"reps":15,"weight":20.41,"rpe":null,"notes":"[SUPERSET:ss_1764966225763]"},{"reps":15,"weight":20.41,"rpe":"moderate","notes":"[SUPERSET:ss_1764966225763]"}]},{"id":"69333f3a8194febf9c316964","name":"Standing Calf Raise","type":"strength","sets":[{"reps":20,"weight":null,"rpe":"challenging","notes":"[SUPERSET:ss_1764966225763]"},{"reps":23,"weight":null,"rpe":"challenging","notes":"[SUPERSET:ss_1764966225763]"}]}],"notes":"","prs":[]},{"id":"6935d0d50cf51ba8aebe70ed","name":"Push Day","date":"2025-12-07T19:09:08.695Z","duration":0,"exercises":[{"id":"6930ed8adcb97cdcd8f273f4","name":"Seated Dumbbell Shoulder Press","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":"challenging","notes":null},{"reps":12,"weight":20.41,"rpe":"challenging","notes":null},{"reps":12,"weight":20.41,"rpe":"challenging","notes":null}]},{"id":"691e92b7616cadd342bcad18","name":"Incline Dumbbell Bench Press Machine","type":"strength","sets":[{"reps":12,"weight":68.04,"rpe":"challenging","notes":null},{"reps":9,"weight":72.57,"rpe":"max_effort","notes":null},{"reps":8,"weight":72.57,"rpe":"max_effort","notes":null}]},{"id":"692496eb92f7e2d9a7d4ebbf","name":"Bench Press Machine","type":"strength","sets":[{"reps":6,"weight":77.11,"rpe":"max_effort","notes":null},{"reps":8,"weight":72.57,"rpe":"max_effort","notes":null},{"reps":8,"weight":72.57,"rpe":"max_effort","notes":null}]},{"id":"69249ad799a37da3f67283d1","name":"Cable Flyes (Chest Height)","type":"strength","sets":[{"reps":10,"weight":11.34,"rpe":"max_effort","notes":"[DROPSET]"},{"reps":10,"weight":0.91,"rpe":"max_effort","notes":"[DROPSET]"},{"reps":10,"weight":11.34,"rpe":"max_effort","notes":"[DROPSET]"}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":12,"weight":4.54,"rpe":"max_effort","notes":null},{"reps":12,"weight":4.54,"rpe":"max_effort","notes":null},{"reps":12,"weight":4.54,"rpe":"challenging","notes":null}]},{"id":"6935dfad93ac655d35ceb227","name":"Rope Overhead Extension","type":"strength","sets":[{"reps":10,"weight":18.14,"rpe":null,"notes":null},{"reps":10,"weight":18.14,"rpe":null,"notes":null},{"reps":10,"weight":18.14,"rpe":null,"notes":null}]}],"notes":"","prs":[]},{"id":"6936f6b357b48ec98c00d2e0","name":"Pull Day","date":"2025-12-08T16:02:58.221Z","duration":0,"exercises":[{"id":"692ccaa69c5bf13c146f27bb","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":15,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1765212493937]"},{"reps":15,"weight":34.02,"rpe":"challenging","notes":"[SUPERSET:ss_1765212493937]"},{"reps":15,"weight":34.02,"rpe":null,"notes":"[SUPERSET:ss_1765212493937]"}]},{"id":"6925f4e4f62e7aae4847f533","name":"Reverse Grip Cable Curl","type":"strength","sets":[{"reps":10,"weight":27.22,"rpe":null,"notes":"[SUPERSET:ss_1765212493937]"},{"reps":10,"weight":27.22,"rpe":"max_effort","notes":"[SUPERSET:ss_1765212493937]"},{"reps":10,"weight":27.22,"rpe":"max_effort","notes":"[SUPERSET:ss_1765212493937]"}]},{"id":"6925f797e225533d5866569c","name":"Single Arm Cable Curl","type":"strength","sets":[{"reps":8,"weight":13.61,"rpe":"max_effort","notes":null},{"reps":12,"weight":11.34,"rpe":"max_effort","notes":null},{"reps":12,"weight":11.34,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 10lbs \u00d7 12"}]},{"id":"6925f06dbc98bf6420305c8a","name":"Single Arm Lat Pulldown","type":"strength","sets":[{"reps":10,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":10,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":12,"weight":22.68,"rpe":"max_effort","notes":null}]},{"id":"6925edacbeb4e75bca98ffac","name":"Single Arm Cable Row (Pronated)","type":"strength","sets":[{"reps":12,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":12,"weight":34.02,"rpe":"challenging","notes":null},{"reps":12,"weight":34.02,"rpe":"challenging","notes":null}]},{"id":"691e86cfd04f363597e3b35f","name":"Weighted Pull-Ups","type":"bodyweight","sets":[{"reps":12,"weight":null,"rpe":null,"notes":null},{"reps":12,"weight":null,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"6940399d5edb3db86aaa0dd9","name":"Leg Day (Quads)","date":"2025-12-15T16:38:53.267Z","duration":0,"exercises":[{"id":"694046b599228024d5ca4627","name":"Cable Spanish Squat Hold","type":"strength","sets":[{"reps":60,"weight":27.22,"rpe":"challenging","notes":null},{"reps":60,"weight":18.14,"rpe":"easy","notes":null}]},{"id":"694042b88984a81ced96ead8","name":"Single Standing Calf Raise","type":"strength","sets":[{"reps":10,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1765819522648]"},{"reps":10,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1765819522648]"}]},{"id":"6928875a5cb53e9f3bc61418","name":"Leg Extension","type":"strength","sets":[{"reps":10,"weight":54.43,"rpe":"max_effort","notes":"[SUPERSET:ss_1765819522648]"},{"reps":10,"weight":54.43,"rpe":"max_effort","notes":"[SUPERSET:ss_1765819522648]"}]},{"id":"69334287370fa95e898ec2cf","name":"Close Stance Goblet Squat","type":"strength","sets":[{"reps":15,"weight":20.41,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 5"},{"reps":15,"weight":20.41,"rpe":"max_effort","notes":null},{"reps":15,"weight":20.41,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 5"}]},{"id":"692320878a4a440b08890aa0","name":"Bulgarian Split Squat","type":"strength","sets":[{"reps":10,"weight":19.96,"rpe":"max_effort","notes":null},{"reps":10,"weight":19.96,"rpe":"max_effort","notes":null},{"reps":12,"weight":19.96,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"694173ae0f55b2600b989726","name":"Push Day (Flat)","date":"2025-12-16T14:58:53.820Z","duration":0,"exercises":[{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":8,"weight":63.5,"rpe":"max_effort","notes":null},{"reps":6,"weight":68.04,"rpe":"max_effort","notes":null},{"reps":7,"weight":63.5,"rpe":"max_effort","notes":null}]},{"id":"692cc3843d65db6d436faeae","name":"Cable Flyes (High to Low)","type":"strength","sets":[{"reps":10,"weight":13.61,"rpe":"max_effort","notes":null},{"reps":12,"weight":13.61,"rpe":"max_effort","notes":null},{"reps":11,"weight":13.61,"rpe":"moderate","notes":null}]},{"id":"691e92b7616cadd342bcad18","name":"Incline Dumbbell Bench Press Machine","type":"strength","sets":[{"reps":7,"weight":68.04,"rpe":"max_effort","notes":null},{"reps":7,"weight":68.04,"rpe":"max_effort","notes":null},{"reps":7,"weight":68.04,"rpe":"max_effort","notes":null}]},{"id":"692496eb92f7e2d9a7d4ebbf","name":"Bench Press Machine","type":"strength","sets":[{"reps":6,"weight":77.11,"rpe":"max_effort","notes":null},{"reps":8,"weight":77.11,"rpe":"max_effort","notes":null},{"reps":10,"weight":77.11,"rpe":"max_effort","notes":null}]},{"id":"692de4f4c40616b1c0d0088e","name":"Tricep Cable Cross Body Pushdown","type":"strength","sets":[{"reps":10,"weight":6.8,"rpe":null,"notes":"[SUPERSET:ss_1765901147540]"},{"reps":12,"weight":6.8,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901147540]"},{"reps":11,"weight":6.8,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901147540]"}]},{"id":"692661d5a0a5497741ee38c5","name":"Body weight dips (on dip bars)","type":"bodyweight","sets":[{"reps":8,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901984612]"},{"reps":10,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901984612]"},{"reps":13,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901984612]"}]},{"id":"692de7f1177e773ca119b45b","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":8,"weight":7.48,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901984612]"},{"reps":8,"weight":7.48,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901984612]"}]},{"id":"691e8d51adc448d499dccd6d","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":15,"weight":19.96,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901147540]"},{"reps":15,"weight":19.96,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901147540]"},{"reps":15,"weight":19.96,"rpe":"max_effort","notes":"[SUPERSET:ss_1765901147540]"}]}],"notes":"","prs":[]},{"id":"6942e8f5b734199dcc096886","name":"Pull Day","date":"2025-12-17T17:31:32.221Z","duration":0,"exercises":[{"id":"6925f797e225533d5866569c","name":"Single Arm Cable Curl","type":"strength","sets":[{"reps":8,"weight":9.07,"rpe":"max_effort","notes":"[SUPERSET:ss_1765996282106]"},{"reps":11,"weight":6.8,"rpe":"max_effort","notes":"[SUPERSET:ss_1765996282106]"},{"reps":10,"weight":6.8,"rpe":"max_effort","notes":"[SUPERSET:ss_1765996282106]"}]},{"id":"6942f6f10d52e7ac88f4f88b","name":"Cable Shrugs","type":"strength","sets":[{"reps":14,"weight":34.02,"rpe":"challenging","notes":"[SUPERSET:ss_1765996282106]"},{"reps":12,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1765996282106]"},{"reps":10,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1765996282106]"}]},{"id":"6942f2f7b9f34fe4d292ddec","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":10,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1765995259924]"},{"reps":15,"weight":34.02,"rpe":null,"notes":"[SUPERSET:ss_1765995259924]"},{"reps":15,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1765995259924]"}]},{"id":"6942f2c02ca483d7b1724b24","name":"Cable Hammer Curl","type":"strength","sets":[{"reps":6,"weight":13.61,"rpe":"max_effort","notes":"[SUPERSET:ss_1765995259924]"},{"reps":8,"weight":13.61,"rpe":"max_effort","notes":"[SUPERSET:ss_1765995259924]"},{"reps":12,"weight":13.61,"rpe":"max_effort","notes":"[SUPERSET:ss_1765995259924]"}]},{"id":"6942f02705bbbb49de302bad","name":"Single Arm Lat Pushdown","type":"strength","sets":[{"reps":8,"weight":11.34,"rpe":"max_effort","notes":null},{"reps":10,"weight":11.34,"rpe":"max_effort","notes":null},{"reps":11,"weight":11.34,"rpe":"max_effort","notes":null}]},{"id":"69308683099a6923768e6d31","name":"Single Arm Cable Row (Neutral)","type":"strength","sets":[{"reps":10,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":10,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":10,"weight":34.02,"rpe":"max_effort","notes":null}]},{"id":"691e86cfd04f363597e3b35f","name":"Weighted Pull-Ups","type":"bodyweight","sets":[{"reps":9,"weight":null,"rpe":"max_effort","notes":null},{"reps":11,"weight":null,"rpe":"max_effort","notes":null},{"reps":12,"weight":null,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"694582f9250cf9fd11c4cb08","name":"Leg Day (Hamstrings & Glutes)","date":"2025-12-19T16:53:12.857Z","duration":0,"exercises":[{"id":"692883da82406fd1cc1577bc","name":"Leg Curl","type":"strength","sets":[{"reps":10,"weight":72.57,"rpe":"max_effort","notes":"[SUPERSET:ss_1766166147685]"},{"reps":10,"weight":72.57,"rpe":"max_effort","notes":"[SUPERSET:ss_1766166147685]"},{"reps":10,"weight":72.57,"rpe":"max_effort","notes":"[SUPERSET:ss_1766166147685]"}]},{"id":"694583c9a8fc7d5d59ccf837","name":"Single Leg Calf Raise","type":"strength","sets":[{"reps":10,"weight":null,"rpe":"max_effort","notes":null},{"reps":9,"weight":null,"rpe":"max_effort","notes":null},{"reps":8,"weight":null,"rpe":"max_effort","notes":null}]},{"id":"6945834fd40b34717eb75361","name":"Single Leg Deadlift","type":"strength","sets":[{"reps":12,"weight":19.96,"rpe":"challenging","notes":null},{"reps":12,"weight":19.96,"rpe":"challenging","notes":null},{"reps":12,"weight":19.96,"rpe":"max_effort","notes":null}]},{"id":"69458b7abd04720a354b60e7","name":"Cable Pull Through","type":"strength","sets":[{"reps":20,"weight":22.68,"rpe":"moderate","notes":null},{"reps":16,"weight":22.68,"rpe":"challenging","notes":null},{"reps":16,"weight":22.68,"rpe":"challenging","notes":null}]},{"id":"6934cad722dc75514b910ff3","name":"Standing Calf Raise","type":"strength","sets":[{"reps":20,"weight":null,"rpe":"challenging","notes":"[SUPERSET:ss_1766166147685]"},{"reps":20,"weight":null,"rpe":"challenging","notes":"[SUPERSET:ss_1766166147685]"},{"reps":18,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1766166147685]"}]},{"id":"69459329c3d2a5a871c006bd","name":"Glute Bridge Hold","type":"strength","sets":[{"reps":60,"weight":19.96,"rpe":"challenging","notes":null},{"reps":60,"weight":19.96,"rpe":"challenging","notes":null},{"reps":60,"weight":19.96,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"6946ce95495e277ee0567759","name":"Push Day (Upper)","date":"2025-12-20T16:28:04.467Z","duration":0,"exercises":[{"id":"6935dfad93ac655d35ceb227","name":"Rope Overhead Extension","type":"strength","sets":[{"reps":8,"weight":20.41,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 30lbs \u00d7 5, Drop 2: 15lbs \u00d7 5"},{"reps":8,"weight":20.41,"rpe":"max_effort","notes":null},{"reps":8,"weight":20.41,"rpe":"max_effort","notes":null}]},{"id":"6946db21e582f736042437cc","name":"Arnie Press","type":"strength","sets":[{"reps":7,"weight":19.96,"rpe":"max_effort","notes":null},{"reps":7,"weight":19.96,"rpe":"max_effort","notes":null},{"reps":8,"weight":19.96,"rpe":"challenging","notes":null}]},{"id":"691e8d7a72018c0c6b6dd5f1","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":24.95,"rpe":"max_effort","notes":"[SUPERSET:ss_1766251860583]"},{"reps":12,"weight":24.95,"rpe":"max_effort","notes":"[SUPERSET:ss_1766251860583]"},{"reps":12,"weight":24.95,"rpe":"max_effort","notes":"[SUPERSET:ss_1766251860583]"}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":15,"weight":4.54,"rpe":"max_effort","notes":"[SUPERSET:ss_1766251860583]"},{"reps":15,"weight":4.54,"rpe":"max_effort","notes":"[SUPERSET:ss_1766251860583]"}]},{"id":"691e8d51adc448d499dccd6d","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":12,"weight":12.25,"rpe":"challenging","notes":"[SUPERSET:ss_1766250359759]"},{"reps":12,"weight":12.25,"rpe":"challenging","notes":"[SUPERSET:ss_1766250359759]"}]},{"id":"69249ad799a37da3f67283d1","name":"Cable Flyes (Chest Height)","type":"strength","sets":[{"reps":10,"weight":11.34,"rpe":"max_effort","notes":"[SUPERSET:ss_1766250359759]"},{"reps":7,"weight":13.61,"rpe":"max_effort","notes":"[SUPERSET:ss_1766250359759]"},{"reps":10,"weight":11.34,"rpe":"max_effort","notes":"[DROPSET] [SUPERSET:ss_1766250359759] Dropset: Drop 1: 15lbs \u00d7 10"}]},{"id":"692496eb92f7e2d9a7d4ebbf","name":"Bench Press Machine","type":"strength","sets":[{"reps":7,"weight":68.04,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 90lbs \u00d7 4"},{"reps":8,"weight":68.04,"rpe":"max_effort","notes":null},{"reps":6,"weight":72.57,"rpe":"max_effort","notes":null}]},{"id":"691e92b7616cadd342bcad18","name":"Incline Dumbbell Bench Press Machine","type":"strength","sets":[{"reps":7,"weight":72.57,"rpe":"max_effort","notes":null},{"reps":8,"weight":72.57,"rpe":"max_effort","notes":null},{"reps":11,"weight":72.57,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"694818c137d0ae0e53b800d8","name":"Pull Day","date":"2025-12-21T15:56:48.579Z","duration":0,"exercises":[{"id":"692ccaa69c5bf13c146f27bb","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":15,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1766335952467]"},{"reps":11,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1766335952467]"},{"reps":10,"weight":34.02,"rpe":"max_effort","notes":"[SUPERSET:ss_1766335952467]"}]},{"id":"694818f62b505326690d1195","name":"Weighted Pull-Ups","type":"bodyweight","sets":[{"reps":10,"weight":4.99,"rpe":"challenging","notes":null},{"reps":9,"weight":4.99,"rpe":"max_effort","notes":null},{"reps":6,"weight":4.99,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 3"}]},{"id":"6925edacbeb4e75bca98ffac","name":"Single Arm Cable Row (Pronated)","type":"strength","sets":[{"reps":12,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":12,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":12,"weight":34.02,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 40lbs \u00d7 9"}]},{"id":"6925f06dbc98bf6420305c8a","name":"Single Arm Lat Pulldown","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":10,"weight":22.68,"rpe":null,"notes":"[DROPSET] Dropset: Drop 1: 25lbs \u00d7 10"},{"reps":10,"weight":22.68,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 30lbs \u00d7 10"}]},{"id":"6925f4e4f62e7aae4847f533","name":"Reverse Grip Cable Curl","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"challenging","notes":"[SUPERSET:ss_1766335952467]"},{"reps":11,"weight":27.22,"rpe":"max_effort","notes":"[SUPERSET:ss_1766335952467]"},{"reps":9,"weight":27.22,"rpe":"max_effort","notes":"[SUPERSET:ss_1766335952467]"}]},{"id":"6925f797e225533d5866569c","name":"Single Arm Cable Curl","type":"strength","sets":[{"reps":8,"weight":13.61,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 15lbs \u00d7 12"},{"reps":8,"weight":11.34,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"694acc9ffed4f6b09f8b7fb2","name":"Leg Day (Quads)","date":"2025-12-23T17:08:46.630Z","duration":0,"exercises":[{"id":"69334287370fa95e898ec2cf","name":"Close Stance Goblet Squat","type":"strength","sets":[{"reps":15,"weight":19.96,"rpe":null,"notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 5"},{"reps":15,"weight":19.96,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 5"},{"reps":15,"weight":19.96,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 6"}]},{"id":"694042b88984a81ced96ead8","name":"Single Standing Calf Raise","type":"strength","sets":[{"reps":8,"weight":7.48,"rpe":"challenging","notes":null},{"reps":8,"weight":7.48,"rpe":"max_effort","notes":null},{"reps":6,"weight":7.48,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 0lbs \u00d7 5"}]},{"id":"692320878a4a440b08890aa0","name":"Bulgarian Split Squat","type":"strength","sets":[{"reps":12,"weight":19.96,"rpe":"challenging","notes":null},{"reps":12,"weight":19.96,"rpe":"max_effort","notes":null},{"reps":10,"weight":19.96,"rpe":"max_effort","notes":null}]},{"id":"69333f3a8194febf9c316964","name":"Standing Calf Raise","type":"strength","sets":[{"reps":20,"weight":null,"rpe":"challenging","notes":"[SUPERSET:ss_1766513155681]"},{"reps":20,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1766513155681]"},{"reps":20,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1766513155681]"}]},{"id":"6928875a5cb53e9f3bc61418","name":"Leg Extension","type":"strength","sets":[{"reps":10,"weight":54.43,"rpe":"max_effort","notes":"[SUPERSET:ss_1766513155681]"},{"reps":10,"weight":54.43,"rpe":"max_effort","notes":"[SUPERSET:ss_1766513155681]"},{"reps":10,"weight":54.43,"rpe":"max_effort","notes":"[SUPERSET:ss_1766513155681]"}]}],"notes":"","prs":[]},{"id":"694c21c70b0f3a8e0c62835e","name":"Push Day (Flat)","date":"2025-12-24T17:24:22.355Z","duration":0,"exercises":[{"id":"69434e264cd9c5179824800f","name":"Seated Lateral Raise (Dumbbell)","type":"strength","sets":[{"reps":20,"weight":12.47,"rpe":"max_effort","notes":"[SUPERSET:ss_1766599138774]"},{"reps":20,"weight":12.47,"rpe":"max_effort","notes":"[SUPERSET:ss_1766599138774]"},{"reps":20,"weight":12.47,"rpe":"challenging","notes":"[SUPERSET:ss_1766599138774]"}]},{"id":"692cc3843d65db6d436faeae","name":"Cable Flyes (High to Low)","type":"strength","sets":[{"reps":12,"weight":13.61,"rpe":"max_effort","notes":"[DROPSET] [SUPERSET:ss_1766599138774] Dropset: Drop 1: 20lbs \u00d7 12"},{"reps":12,"weight":13.61,"rpe":"max_effort","notes":"[SUPERSET:ss_1766599138774]"},{"reps":12,"weight":13.61,"rpe":"max_effort","notes":"[SUPERSET:ss_1766599138774]"}]},{"id":"694c26c8ee4b8aa597d61db9","name":"Incline Dumbbell Bench Press Machine","type":"strength","sets":[{"reps":8,"weight":63.5,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 80lbs \u00d7 3"},{"reps":9,"weight":63.5,"rpe":"max_effort","notes":null},{"reps":7,"weight":68.04,"rpe":"max_effort","notes":null}]},{"id":"692496eb92f7e2d9a7d4ebbf","name":"Bench Press Machine","type":"strength","sets":[{"reps":7,"weight":77.11,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 100lbs \u00d7 4"},{"reps":8,"weight":77.11,"rpe":"max_effort","notes":null},{"reps":12,"weight":77.11,"rpe":"max_effort","notes":null}]},{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":15,"weight":9.98,"rpe":"max_effort","notes":"[SUPERSET:ss_1766600089328]"},{"reps":15,"weight":9.98,"rpe":null,"notes":"[SUPERSET:ss_1766600089328]"},{"reps":15,"weight":9.98,"rpe":"max_effort","notes":"[SUPERSET:ss_1766600089328]"}]},{"id":"692de4f4c40616b1c0d0088e","name":"Tricep Cable Cross Body Pushdown","type":"strength","sets":[{"reps":14,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1766600089328]"},{"reps":7,"weight":9.07,"rpe":"max_effort","notes":"[DROPSET] [SUPERSET:ss_1766600089328] Dropset: Drop 1: 10lbs \u00d7 10"},{"reps":8,"weight":9.07,"rpe":"max_effort","notes":"[SUPERSET:ss_1766600089328]"}]},{"id":"692661d5a0a5497741ee38c5","name":"Body weight dips (on dip bars)","type":"bodyweight","sets":[{"reps":8,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1766601244208]"},{"reps":10,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1766601244208]"},{"reps":14,"weight":null,"rpe":"max_effort","notes":"[SUPERSET:ss_1766601244208]"}]},{"id":"692de7f1177e773ca119b45b","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":8,"weight":7.48,"rpe":null,"notes":"[SUPERSET:ss_1766601244208]"},{"reps":8,"weight":7.48,"rpe":"max_effort","notes":"[SUPERSET:ss_1766601244208]"},{"reps":6,"weight":7.48,"rpe":"max_effort","notes":"[SUPERSET:ss_1766601244208]"}]}],"notes":"","prs":[]},{"id":"694d525b06ea2a7ddc5a28d3","name":"Pull Day","date":"2025-12-25T15:03:55.262Z","duration":0,"exercises":[{"id":"694d5d5c2eab2506b23354db","name":"Dumbbell Hammer Curl","type":"strength","sets":[{"reps":12,"weight":19.96,"rpe":"challenging","notes":"[SUPERSET:ss_1766677984011]"},{"reps":11,"weight":19.96,"rpe":"max_effort","notes":"[SUPERSET:ss_1766677984011]"},{"reps":10,"weight":19.96,"rpe":"max_effort","notes":"[SUPERSET:ss_1766677984011]"}]},{"id":"694d54ab04a8153434b54fbc","name":"Weighted Chin-Ups","type":"bodyweight","sets":[{"reps":10,"weight":7.48,"rpe":"challenging","notes":null},{"reps":7,"weight":7.48,"rpe":"max_effort","notes":null},{"reps":6,"weight":7.48,"rpe":"max_effort","notes":null}]},{"id":"69308683099a6923768e6d31","name":"Single Arm Cable Row (Neutral)","type":"strength","sets":[{"reps":10,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":14,"weight":31.75,"rpe":"max_effort","notes":null},{"reps":12,"weight":31.75,"rpe":"max_effort","notes":null}]},{"id":"6925f06dbc98bf6420305c8a","name":"Single Arm Lat Pulldown","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":10,"weight":22.68,"rpe":"max_effort","notes":null},{"reps":10,"weight":22.68,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 30lbs \u00d7 10"}]},{"id":"692ccaa69c5bf13c146f27bb","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":15,"weight":27.22,"rpe":"challenging","notes":"[SUPERSET:ss_1766677984011]"},{"reps":15,"weight":27.22,"rpe":"challenging","notes":"[SUPERSET:ss_1766677984011]"},{"reps":15,"weight":27.22,"rpe":"max_effort","notes":"[SUPERSET:ss_1766677984011]"}]},{"id":"694d604e26afd7fefffda778","name":"Incline Bench Curls","type":"strength","sets":[{"reps":10,"weight":11.79,"rpe":"max_effort","notes":null},{"reps":8,"weight":11.79,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 16.5lbs \u00d7 8"},{"reps":8,"weight":11.79,"rpe":"max_effort","notes":"[DROPSET] Dropset: Drop 1: 16.5lbs \u00d7 8"}]}],"notes":"","prs":[]}],"Bassi":[{"id":"69265bbb0f9301c22126b549","name":"Push","date":"2025-11-26T01:45:31.620Z","duration":0,"exercises":[{"id":"69265457b54fff9daeb740c7","name":"Machine Press (weight loaded)","type":"strength","sets":[{"reps":15,"weight":90.72,"rpe":"easy","notes":null},{"reps":12,"weight":104.33,"rpe":"moderate","notes":null},{"reps":10,"weight":104.33,"rpe":"moderate","notes":"7reps then 3reps"}]},{"id":"692661d5a0a5497741ee38c5","name":"Body weight dips (on dip bars)","type":"bodyweight","sets":[{"reps":12,"weight":null,"rpe":null,"notes":"Failure"},{"reps":17,"weight":null,"rpe":null,"notes":"To failure"},{"reps":10,"weight":null,"rpe":null,"notes":"Failure"}]},{"id":"691e8d51adc448d499dccd6d","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":12,"weight":13.61,"rpe":"challenging","notes":null},{"reps":12,"weight":13.61,"rpe":"challenging","notes":null},{"reps":12,"weight":13.61,"rpe":"moderate","notes":null}]},{"id":"69265d4ab8647a5734896dc0","name":"Bradford Press","type":"strength","sets":[{"reps":10,"weight":27.22,"rpe":"challenging","notes":"Cheated last couple of reps"},{"reps":12,"weight":24.95,"rpe":"challenging","notes":"8 reps, 4 reps"},{"reps":12,"weight":24.95,"rpe":"moderate","notes":"Preloaded barbell"}]},{"id":"691e89d68ab4c1fded8935b9","name":"Incline Barbell Bench Press","type":"strength","sets":[{"reps":10,"weight":61.23,"rpe":"moderate","notes":null},{"reps":15,"weight":52.16,"rpe":"easy","notes":null},{"reps":12,"weight":56.7,"rpe":"easy","notes":null}]},{"id":"69265682c4b98f1c02cc8393","name":"Cable Flyes (low to high)","type":"strength","sets":[{"reps":15,"weight":18.14,"rpe":"easy","notes":null},{"reps":12,"weight":20.41,"rpe":"moderate","notes":null},{"reps":10,"weight":20.41,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"69279f22daa40915e096b3ae","name":"Pull","date":"2025-11-27T00:45:22.237Z","duration":0,"exercises":[{"id":"6927ac71e29aa9f41aa453e0","name":"Incline Bench Dumbbell Hammer Curl","type":"strength","sets":[{"reps":10,"weight":13.61,"rpe":"challenging","notes":"7 reps, then 3"},{"reps":10,"weight":13.61,"rpe":null,"notes":"7reps, then 3"},{"reps":10,"weight":13.61,"rpe":"moderate","notes":"Challenging after preacher curls"}]},{"id":"69279f3eb793de1de0b4839d","name":"Smith Machine Deadlift","type":"strength","sets":[{"reps":15,"weight":104.33,"rpe":"easy","notes":null},{"reps":12,"weight":113.4,"rpe":"easy","notes":null},{"reps":10,"weight":122.47,"rpe":"moderate","notes":"Grip is the only issue - use straps"}]},{"id":"6927a22dd920be055d23dddf","name":"Smith Machine Barbell Row","type":"strength","sets":[{"reps":15,"weight":49.9,"rpe":"easy","notes":null},{"reps":12,"weight":63.5,"rpe":"moderate","notes":"Control, feel squeeze"},{"reps":10,"weight":72.57,"rpe":"challenging","notes":null}]},{"id":"691e8b0d577bdb82682db4f3","name":"Lat Pulldown (Wide Grip)","type":"strength","sets":[{"reps":15,"weight":58.97,"rpe":"moderate","notes":null},{"reps":12,"weight":63.5,"rpe":"challenging","notes":null},{"reps":10,"weight":68.04,"rpe":"max_effort","notes":"7 reps, then 3"}]},{"id":"6927a7af37e9387ce3b0a6d0","name":"Lat Straight Bar Pushdown (Cable)","type":"strength","sets":[{"reps":15,"weight":36.29,"rpe":"easy","notes":null},{"reps":10,"weight":54.43,"rpe":"challenging","notes":null},{"reps":12,"weight":45.36,"rpe":"moderate","notes":null}]},{"id":"691e8703fcbf67fa5db3efb4","name":"Preacher Curl","type":"strength","sets":[{"reps":10,"weight":31.75,"rpe":"challenging","notes":null},{"reps":10,"weight":31.75,"rpe":"challenging","notes":null},{"reps":10,"weight":27.22,"rpe":"easy","notes":null}]}],"notes":"","prs":[]},{"id":"692cbfddd8e50c428bf3dcdc","name":"Push","date":"2025-11-30T22:06:21.680Z","duration":0,"exercises":[{"id":"692cc5eb9949e336da8ce358","name":"Guillotine Dumbbell Bench Press","type":"strength","sets":[{"reps":12,"weight":24.95,"rpe":"moderate","notes":null},{"reps":12,"weight":24.95,"rpe":null,"notes":null},{"reps":12,"weight":24.95,"rpe":null,"notes":null}]},{"id":"692cc3843d65db6d436faeae","name":"Cable Flyes (High to Low)","type":"strength","sets":[{"reps":10,"weight":36.29,"rpe":"challenging","notes":null},{"reps":15,"weight":31.75,"rpe":"moderate","notes":null},{"reps":15,"weight":31.75,"rpe":"moderate","notes":null}]},{"id":"691e8cc5df1f446aa9d354c5","name":"Incline Dumbbell Bench Press","type":"strength","sets":[{"reps":10,"weight":31.75,"rpe":"moderate","notes":null},{"reps":15,"weight":29.48,"rpe":"challenging","notes":"12 reps then 3"},{"reps":15,"weight":29.48,"rpe":"easy","notes":null}]},{"id":"692ccaa69c5bf13c146f27bb","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":12,"weight":63.5,"rpe":null,"notes":null},{"reps":12,"weight":63.5,"rpe":null,"notes":null},{"reps":12,"weight":63.5,"rpe":null,"notes":null}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":10,"weight":13.61,"rpe":"challenging","notes":null},{"reps":15,"weight":9.07,"rpe":"moderate","notes":"Used v-grip around wrist"},{"reps":15,"weight":9.07,"rpe":"moderate","notes":"Used v-grip around wrist"}]}],"notes":"","prs":[]},{"id":"6930e3c93597a9977e599d9b","name":"Pull","date":"2025-12-04T01:28:40.906Z","duration":0,"exercises":[{"id":"6930ed8adcb97cdcd8f273f4","name":"Seated Dumbbell Shoulder Press","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":null,"notes":"[SUPERSET:ss_1764814355549]"},{"reps":12,"weight":20.41,"rpe":null,"notes":"[SUPERSET:ss_1764814355549]"}]},{"id":"6930ed6ddac9b834bdf1c542","name":"Loaded Machine Row (Single Arm)","type":"strength","sets":[{"reps":12,"weight":90.72,"rpe":null,"notes":"[SUPERSET:ss_1764814355549]"},{"reps":12,"weight":81.65,"rpe":"easy","notes":"[SUPERSET:ss_1764814355549]"},{"reps":12,"weight":99.79,"rpe":null,"notes":"[SUPERSET:ss_1764814355549]"}]},{"id":"6930e8154753302c3e61565d","name":"Single Arm Kettlebell Clean-to-Press","type":"strength","sets":[{"reps":12,"weight":11.79,"rpe":null,"notes":"[SUPERSET:ss_1764813448595]"},{"reps":12,"weight":11.79,"rpe":null,"notes":"[SUPERSET:ss_1764813448595]"},{"reps":12,"weight":11.79,"rpe":null,"notes":"[SUPERSET:ss_1764812835727]"}]},{"id":"6930e79a45343cdc2360433e","name":"T-Bar Row","type":"strength","sets":[{"reps":10,"weight":61.23,"rpe":null,"notes":"[SUPERSET:ss_1764813448595]"},{"reps":12,"weight":56.7,"rpe":null,"notes":"[SUPERSET:ss_1764813448595]"},{"reps":15,"weight":52.16,"rpe":null,"notes":"[SUPERSET:ss_1764812835727]"}]},{"id":"692de7f1177e773ca119b45b","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":12,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1764811795359]"},{"reps":12,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1764811795359]"},{"reps":12,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1764811795359]"},{"reps":12,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1764811795359]"}]},{"id":"6930e3f0b83811248669a3e7","name":"Machine Lat Pulldown (weight loaded)","type":"strength","sets":[{"reps":10,"weight":99.79,"rpe":null,"notes":"[SUPERSET:ss_1764811795359]"},{"reps":15,"weight":81.65,"rpe":"easy","notes":"[SUPERSET:ss_1764811795359]"},{"reps":12,"weight":90.72,"rpe":"easy","notes":"[SUPERSET:ss_1764811795359]"}]}],"notes":"","prs":[]},{"id":"6934bec47ece9992655f0992","name":"Heavy Push","date":"2025-12-06T23:39:48.689Z","duration":0,"exercises":[{"id":"691e8c7d2502a55a25450e56","name":"Barbell Bench Press","type":"strength","sets":[{"reps":1,"weight":115.67,"rpe":"max_effort","notes":"Need a spot for more confidence"},{"reps":10,"weight":61.23,"rpe":"easy","notes":"Warmup set"},{"reps":8,"weight":83.91,"rpe":"moderate","notes":null},{"reps":5,"weight":92.99,"rpe":"moderate","notes":null},{"reps":4,"weight":102.06,"rpe":"challenging","notes":null},{"reps":1,"weight":111.13,"rpe":"challenging","notes":null},{"reps":8,"weight":83.91,"rpe":"moderate","notes":"To failure"},{"reps":5,"weight":92.99,"rpe":"moderate","notes":"Burnout set"}]},{"id":"6934c98723c0c39e99133d73","name":"Cable Curl","type":"strength","sets":[{"reps":10,"weight":31.75,"rpe":null,"notes":"[DROPSET] [SUPERSET:ss_1765067155656] Dropset: Drop 1: 50lbs \u00d7 10"},{"reps":12,"weight":31.75,"rpe":"moderate","notes":"[SUPERSET:ss_1765067155656]"},{"reps":12,"weight":31.75,"rpe":"easy","notes":"[SUPERSET:ss_1765067155656]"}]},{"id":"6934c95f8e8e2e65df9a67fb","name":"Underhand Cable Front Raises (Chest Focus)","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":null,"notes":"[SUPERSET:ss_1765067155656]"},{"reps":12,"weight":22.68,"rpe":"moderate","notes":"[SUPERSET:ss_1765067155656]"},{"reps":13,"weight":22.68,"rpe":"moderate","notes":"[SUPERSET:ss_1765067155656]"}]},{"id":"692de7ef6417cc82d38e5459","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":12,"weight":10.21,"rpe":"moderate","notes":"[SUPERSET:ss_1765066106316]"},{"reps":12,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1765066106316]"},{"reps":12,"weight":10.21,"rpe":"moderate","notes":"[SUPERSET:ss_1765066106316]"}]},{"id":"69265457b54fff9daeb740c7","name":"Machine Press (weight loaded)","type":"strength","sets":[{"reps":7,"weight":81.65,"rpe":"moderate","notes":"[SUPERSET:ss_1765066106316]"},{"reps":11,"weight":81.65,"rpe":"challenging","notes":"[SUPERSET:ss_1765066106316]"},{"reps":10,"weight":81.65,"rpe":"challenging","notes":"[SUPERSET:ss_1765066106316]"}]}],"notes":"","prs":[]},{"id":"69375198e7ec262179128d32","name":"Upper Body","date":"2025-12-08T22:30:47.953Z","duration":0,"exercises":[{"id":"693751b7e13ac6364277dc2f","name":"V-Grip Cable row","type":"strength","sets":[{"reps":12,"weight":58.97,"rpe":"easy","notes":"[SUPERSET:ss_1765233200332]"},{"reps":12,"weight":68.04,"rpe":"moderate","notes":"[SUPERSET:ss_1765233200332]"},{"reps":10,"weight":77.11,"rpe":"challenging","notes":"[SUPERSET:ss_1765233200332]"}]},{"id":"69375229475e9bb2ea7ea24e","name":"Seated Dumbbell Curl into OHP","type":"strength","sets":[{"reps":10,"weight":15.88,"rpe":null,"notes":"[SUPERSET:ss_1765233200332]"},{"reps":10,"weight":15.88,"rpe":"challenging","notes":"[SUPERSET:ss_1765233200332]"},{"reps":10,"weight":15.88,"rpe":"challenging","notes":null}]},{"id":"693755abec434a4c54c0980c","name":"Rope Hammer Curl","type":"strength","sets":[{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1765234116543]"},{"reps":12,"weight":40.82,"rpe":null,"notes":"[SUPERSET:ss_1765234116543]"},{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1765234116543]"}]},{"id":"693758b152451ee5178e3d7a","name":"Alternating Dumbbell Curl","type":"strength","sets":[{"reps":8,"weight":15.88,"rpe":"challenging","notes":"[SUPERSET:ss_1765234890905]"},{"reps":8,"weight":15.88,"rpe":"challenging","notes":"[SUPERSET:ss_1765234890905]"},{"reps":8,"weight":15.88,"rpe":"max_effort","notes":"[SUPERSET:ss_1765234890905]"}]},{"id":"691e8d7a72018c0c6b6dd5f1","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1765234116543]"},{"reps":12,"weight":40.82,"rpe":null,"notes":"[SUPERSET:ss_1765234116543]"},{"reps":12,"weight":40.82,"rpe":null,"notes":"[SUPERSET:ss_1765234116543]"}]},{"id":"692de7f1177e773ca119b45b","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1765234890905]"},{"reps":12,"weight":11.34,"rpe":null,"notes":"[SUPERSET:ss_1765234890905]"},{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1765234890905]"}]}],"notes":"","prs":[]},{"id":"693b7e8a9c334e472f8e3d80","name":"Heavy Push","date":"2025-12-12T02:31:37.988Z","duration":0,"exercises":[{"id":"691e8c7d2502a55a25450e56","name":"Barbell Bench Press","type":"strength","sets":[{"reps":5,"weight":92.99,"rpe":null,"notes":null},{"reps":1,"weight":111.13,"rpe":null,"notes":null},{"reps":8,"weight":83.91,"rpe":null,"notes":null},{"reps":8,"weight":83.91,"rpe":null,"notes":null},{"reps":1,"weight":115.67,"rpe":null,"notes":null},{"reps":4,"weight":102.06,"rpe":null,"notes":null},{"reps":5,"weight":92.99,"rpe":null,"notes":null},{"reps":10,"weight":61.23,"rpe":null,"notes":null}]},{"id":"692de7ef6417cc82d38e5459","name":"Dumbbell Lateral Raise (Overhead)","type":"strength","sets":[{"reps":12,"weight":10.21,"rpe":null,"notes":null},{"reps":12,"weight":10.21,"rpe":null,"notes":null},{"reps":12,"weight":10.21,"rpe":null,"notes":null}]},{"id":"69265457b54fff9daeb740c7","name":"Machine Press (weight loaded)","type":"strength","sets":[{"reps":10,"weight":81.65,"rpe":null,"notes":null},{"reps":7,"weight":81.65,"rpe":null,"notes":null},{"reps":11,"weight":81.65,"rpe":null,"notes":null}]},{"id":"6934c95f8e8e2e65df9a67fb","name":"Underhand Cable Front Raises (Chest Focus)","type":"strength","sets":[{"reps":13,"weight":22.68,"rpe":null,"notes":null},{"reps":12,"weight":22.68,"rpe":null,"notes":null},{"reps":12,"weight":22.68,"rpe":null,"notes":null}]},{"id":"6934c98723c0c39e99133d73","name":"Cable Curl","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":null,"notes":null},{"reps":12,"weight":31.75,"rpe":null,"notes":null},{"reps":10,"weight":31.75,"rpe":null,"notes":null}]}],"notes":"","prs":[]},{"id":"693f3082d1dc5b31a81e6785","name":"Pull","date":"2025-12-14T21:47:46.123Z","duration":0,"exercises":[{"id":"691e8b0d577bdb82682db4f3","name":"Lat Pulldown (Wide Grip)","type":"strength","sets":[{"reps":4,"weight":88.45,"rpe":"challenging","notes":null},{"reps":6,"weight":88.45,"rpe":"challenging","notes":null},{"reps":6,"weight":86.18,"rpe":"moderate","notes":null}]},{"id":"6927a7af37e9387ce3b0a6d0","name":"Lat Straight Bar Pushdown (Cable)","type":"strength","sets":[{"reps":6,"weight":63.5,"rpe":null,"notes":null},{"reps":6,"weight":65.77,"rpe":null,"notes":null},{"reps":4,"weight":68.04,"rpe":null,"notes":null}]},{"id":"691e8703fcbf67fa5db3efb4","name":"Preacher Curl","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":null,"notes":null},{"reps":10,"weight":31.75,"rpe":null,"notes":null},{"reps":8,"weight":34.02,"rpe":null,"notes":null}]},{"id":"6927ac71e29aa9f41aa453e0","name":"Incline Bench Dumbbell Hammer Curl","type":"strength","sets":[{"reps":8,"weight":15.88,"rpe":null,"notes":null},{"reps":8,"weight":15.88,"rpe":null,"notes":null},{"reps":8,"weight":15.88,"rpe":null,"notes":null}]},{"id":"6927a22dd920be055d23dddf","name":"Smith Machine Barbell Row","type":"strength","sets":[{"reps":4,"weight":95.25,"rpe":null,"notes":null},{"reps":6,"weight":90.72,"rpe":"challenging","notes":null},{"reps":6,"weight":86.18,"rpe":"moderate","notes":null}]},{"id":"691e877058e8d40f141fc64c","name":"Barbell Deadlift","type":"strength","sets":[{"reps":4,"weight":161.03,"rpe":null,"notes":null},{"reps":6,"weight":156.49,"rpe":"moderate","notes":"Felt pretty smooth"},{"reps":6,"weight":151.95,"rpe":"moderate","notes":"Feels smooth - no shoes"}]}],"notes":"","prs":[]},{"id":"6940b256bc594fc0308ce064","name":"Push","date":"2025-12-16T01:13:57.862Z","duration":0,"exercises":[{"id":"6940aea00c11653edbf1fe24","name":"Decline Bench Press","type":"strength","sets":[{"reps":10,"weight":97.52,"rpe":"challenging","notes":null},{"reps":10,"weight":97.52,"rpe":"moderate","notes":null},{"reps":10,"weight":97.52,"rpe":"max_effort","notes":null}]},{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":6,"weight":71.67,"rpe":null,"notes":null},{"reps":8,"weight":71.67,"rpe":"max_effort","notes":null},{"reps":10,"weight":71.67,"rpe":"max_effort","notes":null}]},{"id":"69265682c4b98f1c02cc8393","name":"Cable Flyes (low to high)","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":"moderate","notes":null},{"reps":12,"weight":20.41,"rpe":null,"notes":null},{"reps":12,"weight":18.14,"rpe":"moderate","notes":null}]},{"id":"691e8c7d2502a55a25450e56","name":"Barbell Bench Press","type":"strength","sets":[{"reps":4,"weight":92.99,"rpe":"max_effort","notes":null},{"reps":5,"weight":92.99,"rpe":"moderate","notes":null},{"reps":5,"weight":92.99,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"6943427fa6357eb101b0c69e","name":"Shoulders and Arms","date":"2025-12-17T23:53:35.675Z","duration":0,"exercises":[{"id":"6930ed8adcb97cdcd8f273f4","name":"Seated Dumbbell Shoulder Press","type":"strength","sets":[{"reps":10,"weight":27.22,"rpe":"moderate","notes":null},{"reps":10,"weight":29.48,"rpe":"challenging","notes":null},{"reps":6,"weight":31.75,"rpe":"max_effort","notes":null}]},{"id":"69434595baee13ed2d4cb4c5","name":"Smith Machine Shoulder Press (Behind the Neck)","type":"strength","sets":[{"reps":9,"weight":31.75,"rpe":"challenging","notes":"[SUPERSET:ss_1766016448400]"},{"reps":10,"weight":31.75,"rpe":"moderate","notes":"[SUPERSET:ss_1766016448400]"},{"reps":10,"weight":31.75,"rpe":"moderate","notes":"[SUPERSET:ss_1766016448400]"}]},{"id":"693758b152451ee5178e3d7a","name":"Alternating Dumbbell Curl","type":"strength","sets":[{"reps":10,"weight":15.88,"rpe":"moderate","notes":"[SUPERSET:ss_1766016448400]"},{"reps":10,"weight":15.88,"rpe":null,"notes":"[SUPERSET:ss_1766016448400]"},{"reps":10,"weight":15.88,"rpe":"moderate","notes":"[SUPERSET:ss_1766016448400]"}]},{"id":"694351dd627803b8bd444ea6","name":"Rear Delt Flyes (Dumbbell)","type":"strength","sets":[{"reps":12,"weight":12.47,"rpe":null,"notes":null},{"reps":12,"weight":12.47,"rpe":null,"notes":null},{"reps":12,"weight":12.47,"rpe":"moderate","notes":null}]},{"id":"69434e264cd9c5179824800f","name":"Seated Lateral Raise (Dumbbell)","type":"strength","sets":[{"reps":12,"weight":11.34,"rpe":null,"notes":"[SUPERSET:ss_1766018613615]"},{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1766018613615]"},{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1766018613615]"}]},{"id":"69434e0d38ce156c238d8b39","name":"Seated e-z Bar Tricep Extension","type":"strength","sets":[{"reps":11,"weight":31.75,"rpe":"moderate","notes":"[SUPERSET:ss_1766018613615]"},{"reps":12,"weight":31.75,"rpe":"moderate","notes":"[SUPERSET:ss_1766018613615]"},{"reps":12,"weight":31.75,"rpe":"easy","notes":"[SUPERSET:ss_1766018613615]"}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":12,"weight":13.61,"rpe":"moderate","notes":"[SUPERSET:ss_1766017565745]"},{"reps":12,"weight":13.61,"rpe":null,"notes":"[SUPERSET:ss_1766017565745]"},{"reps":12,"weight":13.61,"rpe":null,"notes":"[SUPERSET:ss_1766017565745]"}]},{"id":"6934c98723c0c39e99133d73","name":"Cable Curl","type":"strength","sets":[{"reps":10,"weight":18.14,"rpe":"challenging","notes":"[SUPERSET:ss_1766017565745]"},{"reps":10,"weight":18.14,"rpe":null,"notes":"[SUPERSET:ss_1766017565745]"},{"reps":10,"weight":18.14,"rpe":null,"notes":"[SUPERSET:ss_1766017565745]"}]}],"notes":"","prs":[]},{"id":"69446606645101c94c7bd0d0","name":"Back and Triceps","date":"2025-12-18T20:37:26.478Z","duration":0,"exercises":[{"id":"694466197f64cd25b65b65ab","name":"Cleans","type":"strength","sets":[{"reps":10,"weight":52.16,"rpe":"moderate","notes":null},{"reps":8,"weight":61.23,"rpe":"challenging","notes":null},{"reps":8,"weight":61.23,"rpe":"challenging","notes":null}]},{"id":"691e8d7a72018c0c6b6dd5f1","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":"easy","notes":"[SUPERSET:ss_1766092743556]"},{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1766092743556]"},{"reps":12,"weight":36.29,"rpe":null,"notes":"[SUPERSET:ss_1766092743556]"}]},{"id":"694473e4dedf52bbadaee9c6","name":"Diverging Lat Pulldown Machine","type":"strength","sets":[{"reps":8,"weight":77.11,"rpe":"challenging","notes":null},{"reps":8,"weight":77.11,"rpe":null,"notes":null},{"reps":7,"weight":86.18,"rpe":"challenging","notes":null}]},{"id":"69446f94025e7f2e17029dc2","name":"Lat Pulldown (Cable) - V-Grip","type":"strength","sets":[{"reps":9,"weight":68.04,"rpe":"max_effort","notes":"[SUPERSET:ss_1766092743556]"},{"reps":12,"weight":68.04,"rpe":"challenging","notes":"[SUPERSET:ss_1766092743556]"},{"reps":12,"weight":68.04,"rpe":"challenging","notes":"[SUPERSET:ss_1766092743556]"}]},{"id":"69446b7432fcfaee0ccd6832","name":"Plate Loaded Machine Row (Both Arms)","type":"strength","sets":[{"reps":12,"weight":99.79,"rpe":null,"notes":null},{"reps":12,"weight":90.72,"rpe":"moderate","notes":null},{"reps":12,"weight":81.65,"rpe":"easy","notes":null}]}],"notes":"","prs":[]},{"id":"69471af7e55d0427d2f315af","name":"Push ","date":"2025-12-20T21:53:59.512Z","duration":0,"exercises":[{"id":"6944116fd7873c02946130cd","name":"Bench Press (Dumbell)","type":"strength","sets":[{"reps":10,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1766267767723]"},{"reps":8,"weight":40.82,"rpe":"challenging","notes":"[SUPERSET:ss_1766267767723]"},{"reps":7,"weight":40.82,"rpe":null,"notes":"[SUPERSET:ss_1766267767723]"}]},{"id":"69265457b54fff9daeb740c7","name":"Machine Press (weight loaded)","type":"strength","sets":[{"reps":8,"weight":81.65,"rpe":"challenging","notes":null},{"reps":9,"weight":81.65,"rpe":"challenging","notes":null},{"reps":6,"weight":81.65,"rpe":"challenging","notes":null}]},{"id":"694351dd627803b8bd444ea6","name":"Rear Delt Flyes (Dumbbell)","type":"strength","sets":[{"reps":15,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1766269248210]"},{"reps":15,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1766269248210]"},{"reps":12,"weight":10.21,"rpe":"moderate","notes":"[SUPERSET:ss_1766269248210]"}]},{"id":"69472128f28f17509361fac1","name":"Incline Bench Press (Smith Machine)","type":"strength","sets":[{"reps":9,"weight":58.97,"rpe":"challenging","notes":"[SUPERSET:ss_1766269248210]"},{"reps":12,"weight":49.9,"rpe":"moderate","notes":"[SUPERSET:ss_1766269248210]"},{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1766269248210]"}]},{"id":"69434e264cd9c5179824800f","name":"Seated Lateral Raise (Dumbbell)","type":"strength","sets":[{"reps":12,"weight":9.07,"rpe":null,"notes":"[SUPERSET:ss_1766267767723]"},{"reps":12,"weight":9.07,"rpe":null,"notes":"[SUPERSET:ss_1766267767723]"},{"reps":12,"weight":9.07,"rpe":null,"notes":"[SUPERSET:ss_1766267767723]"}]}],"notes":"","prs":[]},{"id":"694b600282b370e8c7eea744","name":"Push","date":"2025-12-24T03:37:38.060Z","duration":0,"exercises":[],"notes":"","prs":[]},{"id":"694f2bc0691b048c775ac762","name":"Arms and Shoulders","date":"2025-12-27T00:43:39.473Z","duration":0,"exercises":[{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":9,"weight":80.74,"rpe":"max_effort","notes":null},{"reps":9,"weight":80.74,"rpe":"max_effort","notes":null},{"reps":12,"weight":71.67,"rpe":"moderate","notes":null}]},{"id":"694f31479f14ca95620838d1","name":"Machine Dips","type":"bodyweight","sets":[{"reps":14,"weight":111.13,"rpe":"challenging","notes":null},{"reps":15,"weight":111.13,"rpe":"moderate","notes":null},{"reps":12,"weight":111.13,"rpe":"moderate","notes":null}]},{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":12,"weight":8.16,"rpe":null,"notes":"[SUPERSET:ss_1766799064382]"},{"reps":12,"weight":8.16,"rpe":null,"notes":"[SUPERSET:ss_1766799064382]"},{"reps":12,"weight":8.16,"rpe":"moderate","notes":"[SUPERSET:ss_1766799064382]"}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":12,"weight":9.07,"rpe":null,"notes":"[SUPERSET:ss_1766799064382]"},{"reps":12,"weight":9.07,"rpe":null,"notes":"[SUPERSET:ss_1766799064382]"},{"reps":13,"weight":9.07,"rpe":null,"notes":"[SUPERSET:ss_1766799064382]"}]},{"id":"694723b62c35c9255069b877","name":"Seated bicep curl","type":"strength","sets":[{"reps":12,"weight":36.29,"rpe":"max_effort","notes":null},{"reps":13,"weight":36.29,"rpe":"moderate","notes":null},{"reps":15,"weight":31.75,"rpe":"easy","notes":null}]}],"notes":"","prs":[]},{"id":"6952ab94df19f494265838a4","name":"push","date":"2025-12-29T16:25:56.403Z","duration":0,"exercises":[],"notes":"","prs":[]},{"id":"69716ad999fefece1274bdcc","name":"Push and arms","date":"2026-01-22T00:10:01.226Z","duration":0,"exercises":[{"id":"692f0c44b8abbfbf184cccac","name":"Dumbbell bench flyes","type":"strength","sets":[{"reps":8,"weight":20.41,"rpe":null,"notes":"[SUPERSET:ss_1769043421523]"},{"reps":8,"weight":20.41,"rpe":"moderate","notes":"[SUPERSET:ss_1769043421523]"},{"reps":10,"weight":10.21,"rpe":"moderate","notes":"[SUPERSET:ss_1769043421523]"},{"reps":8,"weight":20.41,"rpe":"moderate","notes":"[SUPERSET:ss_1769043421523]"},{"reps":10,"weight":10.21,"rpe":"moderate","notes":"[SUPERSET:ss_1769043421523]"},{"reps":10,"weight":10.21,"rpe":null,"notes":"[SUPERSET:ss_1769043421523]"}]},{"id":"69716b1e56d07475eadb1ade","name":"Incline Dumbbell Bench Press","type":"strength","sets":[{"reps":10,"weight":36.29,"rpe":"moderate","notes":"[SUPERSET:ss_1769040712904]"},{"reps":8,"weight":38.56,"rpe":"moderate","notes":"[SUPERSET:ss_1769040712904]"},{"reps":7,"weight":38.56,"rpe":"challenging","notes":"[SUPERSET:ss_1769040712904]"}]},{"id":"693758b152451ee5178e3d7a","name":"Alternating Dumbbell Curl","type":"strength","sets":[{"reps":12,"weight":13.61,"rpe":"moderate","notes":"[SUPERSET:ss_1769040712904]"},{"reps":10,"weight":13.61,"rpe":"moderate","notes":"[SUPERSET:ss_1769040712904]"},{"reps":10,"weight":13.61,"rpe":null,"notes":null}]},{"id":"69717093aa72f2a9f15d6f59","name":"Decline Bench Press","type":"strength","sets":[{"reps":10,"weight":83.91,"rpe":"moderate","notes":"[SUPERSET:ss_1769042112543]"},{"reps":8,"weight":83.91,"rpe":"moderate","notes":"[SUPERSET:ss_1769042112543]"},{"reps":9,"weight":83.91,"rpe":"challenging","notes":"[SUPERSET:ss_1769042112543]"}]},{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1769042112543]"},{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1769042112543]"},{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1769042112543]"}]}],"notes":"","prs":[]},{"id":"698148d448bae12dd9d070df","name":"Heavy Push","date":"2026-02-03T01:01:08.796Z","duration":0,"exercises":[{"id":"6965afde95c60c4ff5f6d90e","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":8,"weight":45.36,"rpe":null,"notes":null},{"reps":8,"weight":45.36,"rpe":"moderate","notes":"[DROPSET] Dropset: Drop 1: 80lbs \u00d7 8, Drop 2: 60lbs \u00d7 8, Drop 3: 40lbs \u00d7 10"},{"reps":8,"weight":45.36,"rpe":null,"notes":null}]},{"id":"6981491286e4716c2f030f4c","name":"Barbell Bench Press","type":"strength","sets":[{"reps":6,"weight":92.99,"rpe":"moderate","notes":"Felt smooth!"},{"reps":5,"weight":102.06,"rpe":"moderate","notes":"Felt smooth!!!"},{"reps":4,"weight":106.59,"rpe":"moderate","notes":"Could have done 1 more"}]},{"id":"69716b1e56d07475eadb1ade","name":"Incline Dumbbell Bench Press","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"moderate","notes":"Time under tempo "},{"reps":7,"weight":36.29,"rpe":"challenging","notes":null},{"reps":5,"weight":38.56,"rpe":null,"notes":null}]},{"id":"6981510b41d6f425079ba166","name":"Machine Fly","type":"strength","sets":[{"reps":7,"weight":81.65,"rpe":"moderate","notes":null},{"reps":6,"weight":86.18,"rpe":"challenging","notes":null},{"reps":4,"weight":90.72,"rpe":"challenging","notes":null}]},{"id":"69815357030a80190f04d77a","name":"Standing Military Press ","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"challenging","notes":"Strict"},{"reps":7,"weight":40.82,"rpe":"max_effort","notes":null},{"reps":6,"weight":40.82,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"698fa844ef893c706d408d04","name":"Heavy Push ","date":"2026-02-13T22:40:04.290Z","duration":0,"exercises":[{"id":"698fb8db7bb5e7a1ffd90c1a","name":"Rear Delt Flyes (Machine)","type":"strength","sets":[{"reps":6,"weight":81.65,"rpe":null,"notes":null},{"reps":10,"weight":72.57,"rpe":"moderate","notes":null},{"reps":6,"weight":81.65,"rpe":"challenging","notes":null}]},{"id":"69472128f28f17509361fac1","name":"Incline Bench Press (Smith Machine)","type":"strength","sets":[{"reps":8,"weight":72.57,"rpe":"moderate","notes":null},{"reps":6,"weight":81.65,"rpe":"challenging","notes":null},{"reps":4,"weight":86.18,"rpe":null,"notes":null}]},{"id":"6976a572e47893029ead81e6","name":"Bench Press (Dumbell)","type":"strength","sets":[{"reps":6,"weight":40.82,"rpe":"challenging","notes":null},{"reps":5,"weight":40.82,"rpe":"max_effort","notes":null},{"reps":6,"weight":40.82,"rpe":"challenging","notes":null}]},{"id":"698fb0e005154ba4cff5f149","name":"Close Grip Bench Press","type":"strength","sets":[{"reps":6,"weight":70.31,"rpe":"moderate","notes":null},{"reps":6,"weight":74.84,"rpe":"challenging","notes":null},{"reps":4,"weight":79.38,"rpe":"max_effort","notes":null}]},{"id":"6930ed8adcb97cdcd8f273f4","name":"Seated Dumbbell Shoulder Press","type":"strength","sets":[{"reps":6,"weight":29.48,"rpe":null,"notes":null},{"reps":6,"weight":29.48,"rpe":"challenging","notes":null},{"reps":4,"weight":29.48,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"699cfdd907cef965d6d43f46","name":"Pull Day Volume (M1D9)","date":"2026-02-24T01:24:41.723Z","duration":0,"exercises":[{"id":"69446f94025e7f2e17029dc2","name":"Lat Pulldown (Cable) - V-Grip","type":"strength","sets":[{"reps":10,"weight":74.84,"rpe":"challenging","notes":null},{"reps":12,"weight":74.84,"rpe":"challenging","notes":null},{"reps":8,"weight":74.84,"rpe":"max_effort","notes":null}]},{"id":"699cfe08ce7968d4a0e75967","name":"Barbell Row","type":"strength","sets":[{"reps":8,"weight":83.91,"rpe":null,"notes":null},{"reps":10,"weight":79.38,"rpe":"moderate","notes":null},{"reps":12,"weight":70.31,"rpe":"easy","notes":null}]},{"id":"694d5d5c2eab2506b23354db","name":"Dumbbell Hammer Curl","type":"strength","sets":[{"reps":10,"weight":8.16,"rpe":null,"notes":null},{"reps":10,"weight":8.16,"rpe":null,"notes":"Use kettlebells"},{"reps":10,"weight":8.16,"rpe":"moderate","notes":"Use kettlebells"}]},{"id":"6942f2f7b9f34fe4d292ddec","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":null,"notes":null},{"reps":12,"weight":31.75,"rpe":null,"notes":null},{"reps":12,"weight":31.75,"rpe":"moderate","notes":null}]},{"id":"69599aca5b0316658505e1f2","name":"Cable row","type":"strength","sets":[{"reps":8,"weight":74.84,"rpe":"challenging","notes":null},{"reps":10,"weight":68.04,"rpe":"moderate","notes":null},{"reps":12,"weight":68.04,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"69aa1bbf7aefed45b3a7024d","name":"Push","date":"2026-03-06T00:11:42.858Z","duration":0,"exercises":[{"id":"69aa28bed0d5b72564d6cfc6","name":"Hex Press","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":null,"notes":"[SUPERSET:ss_1772759252378]"},{"reps":12,"weight":15.88,"rpe":null,"notes":"[SUPERSET:ss_1772759252378]"},{"reps":11,"weight":20.41,"rpe":"challenging","notes":"[SUPERSET:ss_1772759252378]"}]},{"id":"6981491286e4716c2f030f4c","name":"Barbell Bench Press","type":"strength","sets":[{"reps":7,"weight":83.91,"rpe":"challenging","notes":"Wrist injured from snowboarding. Didn\u2019t want to push it. Went for TUT 3-1-2"},{"reps":6,"weight":83.91,"rpe":"challenging","notes":null},{"reps":6,"weight":83.91,"rpe":"moderate","notes":null}]},{"id":"69aa1f960545a2919294f0b0","name":"Plate Raise","type":"strength","sets":[{"reps":12,"weight":20.41,"rpe":"moderate","notes":null},{"reps":12,"weight":20.41,"rpe":"moderate","notes":null},{"reps":12,"weight":20.41,"rpe":null,"notes":null}]},{"id":"69aa221e285d0387d5ddf574","name":"Ground & Pound (single arm)","type":"strength","sets":[{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1772757565875]"},{"reps":12,"weight":40.82,"rpe":null,"notes":null},{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1772757565875]"}]},{"id":"6934c98723c0c39e99133d73","name":"Cable Curl","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":"moderate","notes":"[SUPERSET:ss_1772757565875]"},{"reps":12,"weight":31.75,"rpe":null,"notes":"[SUPERSET:ss_1772757565875]"},{"reps":12,"weight":31.75,"rpe":null,"notes":null}]},{"id":"694d5d5c2eab2506b23354db","name":"Dumbbell Hammer Curl","type":"strength","sets":[{"reps":12,"weight":11.34,"rpe":"moderate","notes":"[SUPERSET:ss_1772759252378]"},{"reps":12,"weight":11.34,"rpe":null,"notes":"[SUPERSET:ss_1772759252378]"},{"reps":12,"weight":11.34,"rpe":null,"notes":null}]}],"notes":"","prs":[]},{"id":"69b9dfa9a442e0fca364a3e1","name":"Push (M1D11)","date":"2026-03-17T23:11:36.981Z","duration":0,"exercises":[{"id":"694351dd627803b8bd444ea6","name":"Rear Delt Flyes (Dumbbell)","type":"strength","sets":[{"reps":15,"weight":8.16,"rpe":"moderate","notes":null},{"reps":15,"weight":8.16,"rpe":null,"notes":null},{"reps":15,"weight":8.16,"rpe":"easy","notes":"18lbs kettlebell"}]},{"id":"69440c2ac832f2169acba3c7","name":"Incline Benchpress","type":"strength","sets":[{"reps":12,"weight":70.31,"rpe":"moderate","notes":null},{"reps":8,"weight":79.38,"rpe":"challenging","notes":null},{"reps":6,"weight":79.38,"rpe":"challenging","notes":null}]},{"id":"69b9e378f5c7ae69ba170066","name":"Machine Press (weight loaded)","type":"strength","sets":[{"reps":12,"weight":83.91,"rpe":"moderate","notes":null},{"reps":10,"weight":92.99,"rpe":"max_effort","notes":null},{"reps":8,"weight":92.99,"rpe":"challenging","notes":null}]},{"id":"694f31479f14ca95620838d1","name":"Machine Dips","type":"bodyweight","sets":[{"reps":10,"weight":92.99,"rpe":"moderate","notes":null},{"reps":8,"weight":102.06,"rpe":null,"notes":null},{"reps":12,"weight":83.91,"rpe":null,"notes":null}]},{"id":"69434595baee13ed2d4cb4c5","name":"Smith Machine Shoulder Press (Behind the Neck)","type":"strength","sets":[{"reps":12,"weight":40.82,"rpe":"easy","notes":null},{"reps":8,"weight":49.9,"rpe":"max_effort","notes":null},{"reps":7,"weight":49.9,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]}],"Jana":[{"id":"6928735c307dacf407660744","name":"Back Day","date":"2025-11-27T15:50:52.157Z","duration":0,"exercises":[{"id":"6927a7af37e9387ce3b0a6d0","name":"Lat Straight Bar Pushdown (Cable)","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"moderate","notes":null},{"reps":12,"weight":27.22,"rpe":"moderate","notes":null},{"reps":12,"weight":27.22,"rpe":"moderate","notes":null}]},{"id":"691e8682e3cd37b0a6c341db","name":"Seated Cable row","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null}]},{"id":"691e8b0d577bdb82682db4f3","name":"Lat Pulldown (Wide Grip)","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":10,"weight":36.29,"rpe":"moderate","notes":null}]}],"notes":"Before office, short on time","prs":[]},{"id":"692cbf839b108c515e69b346","name":"Leg Day","date":"2025-11-30T22:04:50.582Z","duration":0,"exercises":[{"id":"692cc72cfa99983bee6c7e61","name":"Hip Abduction (Outer Thigh)","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":"easy","notes":null},{"reps":12,"weight":36.29,"rpe":"moderate","notes":null},{"reps":12,"weight":40.82,"rpe":"moderate","notes":null}]},{"id":"691e8962cf515d79e30eb2a3","name":"Leg Press","type":"strength","sets":[{"reps":8,"weight":99.79,"rpe":"moderate","notes":"Knee started feeling a bit strained, could do more with a brace"},{"reps":10,"weight":90.72,"rpe":"moderate","notes":"Roc it press, hamstring focus"},{"reps":10,"weight":90.72,"rpe":"easy","notes":null}]},{"id":"691e877058e8d40f141fc64c","name":"Barbell Deadlift","type":"strength","sets":[{"reps":7,"weight":61.23,"rpe":"moderate","notes":"Grip gave out before legs"},{"reps":6,"weight":56.7,"rpe":"challenging","notes":null},{"reps":8,"weight":52.16,"rpe":"moderate","notes":null}]},{"id":"6928875a5cb53e9f3bc61418","name":"Leg Extension","type":"strength","sets":[{"reps":12,"weight":47.63,"rpe":"moderate","notes":null},{"reps":12,"weight":47.63,"rpe":"challenging","notes":null},{"reps":12,"weight":47.63,"rpe":"moderate","notes":null}]},{"id":"691e89b063532a014564b01f","name":"Seated Calf Raise","type":"strength","sets":[{"reps":10,"weight":36.29,"rpe":"moderate","notes":"Pulling on front of right knee - new pain, stopped short"},{"reps":12,"weight":36.29,"rpe":"moderate","notes":null},{"reps":12,"weight":36.29,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"692f0804735168e17e8b9504","name":"Push Day","date":"2025-12-02T15:38:44.305Z","duration":0,"exercises":[{"id":"691e8a04616cadd342bca3b7","name":"Bench Press (Dumbell)","type":"strength","sets":[{"reps":8,"weight":12.47,"rpe":"challenging","notes":null},{"reps":8,"weight":12.47,"rpe":"challenging","notes":null},{"reps":6,"weight":13.61,"rpe":"challenging","notes":null}]},{"id":"691e8cc5df1f446aa9d354c5","name":"Incline Dumbbell Bench Press","type":"strength","sets":[{"reps":8,"weight":10.21,"rpe":"challenging","notes":null},{"reps":8,"weight":10.21,"rpe":"challenging","notes":null},{"reps":8,"weight":10.21,"rpe":"moderate","notes":null}]},{"id":"692f0cdebcb7d41a0eacb58c","name":"Dumbbell front raises","type":"strength","sets":[{"reps":8,"weight":5.67,"rpe":"easy","notes":null},{"reps":10,"weight":5.67,"rpe":"moderate","notes":null},{"reps":8,"weight":5.67,"rpe":"moderate","notes":null}]},{"id":"692f0c44b8abbfbf184cccac","name":"Dumbbell bench flyes","type":"strength","sets":[{"reps":10,"weight":5.67,"rpe":"moderate","notes":null},{"reps":10,"weight":5.67,"rpe":"moderate","notes":null},{"reps":8,"weight":5.67,"rpe":"easy","notes":null}]}],"notes":"","prs":[]},{"id":"6931baf6bef7dd5342f91bc4","name":"Back Day","date":"2025-12-04T16:46:46.712Z","duration":0,"exercises":[{"id":"6931c5cedc61a9a14402fb3e","name":"Seated dumbbell back flyes","type":"strength","sets":[{"reps":10,"weight":4.54,"rpe":"easy","notes":null},{"reps":10,"weight":4.54,"rpe":"moderate","notes":null},{"reps":10,"weight":4.54,"rpe":"easy","notes":null}]},{"id":"691e8332bcda944872a184b6","name":"V-Grip Lat Pulldowns","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"moderate","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"max_effort","notes":null}]},{"id":"691e8682e3cd37b0a6c341db","name":"Seated Cable row","type":"strength","sets":[{"reps":10,"weight":31.75,"rpe":"moderate","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null}]},{"id":"69308927baea10b4c98f2f17","name":"Lat Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":18.14,"rpe":"moderate","notes":"[SUPERSET:ss_1764868759156]"},{"reps":12,"weight":22.68,"rpe":"challenging","notes":"[SUPERSET:ss_1764868759156]"},{"reps":8,"weight":22.68,"rpe":"challenging","notes":"[SUPERSET:ss_1764868759156]"}]},{"id":"691e8d7a72018c0c6b6dd5f1","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":18.14,"rpe":"easy","notes":"[SUPERSET:ss_1764868759156]"},{"reps":8,"weight":22.68,"rpe":"max_effort","notes":"[SUPERSET:ss_1764868759156]"},{"reps":12,"weight":18.14,"rpe":"max_effort","notes":"[SUPERSET:ss_1764868759156]"}]},{"id":"6931c9a0a25bc2bbbc41ccff","name":"Seated back extension","type":"strength","sets":[{"reps":12,"weight":63.5,"rpe":"easy","notes":null},{"reps":12,"weight":68.04,"rpe":"easy","notes":null},{"reps":12,"weight":72.57,"rpe":"moderate","notes":"Idk why this machine doesn\u2019t feel like it hits"}]}],"notes":"","prs":[]},{"id":"6934bf58c3bf144f6a34bf6d","name":"Leg day","date":"2025-12-06T23:42:16.632Z","duration":0,"exercises":[{"id":"6934bf8678748aa3e59b36d0","name":"Smith machine RDL","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"moderate","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null}]},{"id":"6934c26a0fbaddb82badb06d","name":"Kettlebell step-ups","type":"strength","sets":[{"reps":10,"weight":11.79,"rpe":"moderate","notes":null},{"reps":12,"weight":11.79,"rpe":"moderate","notes":null},{"reps":12,"weight":11.79,"rpe":"moderate","notes":null}]},{"id":"6934cccc6bd2e3e0e6058dcc","name":"Abduction (inner thigh)","type":"strength","sets":[{"reps":12,"weight":45.36,"rpe":"moderate","notes":null},{"reps":12,"weight":40.82,"rpe":"moderate","notes":null}]},{"id":"6934cad722dc75514b910ff3","name":"Standing Calf Raise","type":"strength","sets":[{"reps":15,"weight":40.82,"rpe":"easy","notes":null},{"reps":15,"weight":40.82,"rpe":"easy","notes":null},{"reps":12,"weight":40.82,"rpe":"moderate","notes":null}]},{"id":"6934c6e992a3efdefd510cfb","name":"Back extension","type":"strength","sets":[{"reps":12,"weight":11.34,"rpe":"moderate","notes":null},{"reps":12,"weight":11.34,"rpe":"challenging","notes":null},{"reps":12,"weight":11.34,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"693782761476296eec1ced73","name":"Shoulders and arms","date":"2025-12-09T01:59:18.418Z","duration":0,"exercises":[{"id":"6934c98723c0c39e99133d73","name":"Cable Curl","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":"challenging","notes":"Two handed with a bar"},{"reps":12,"weight":22.68,"rpe":"challenging","notes":null},{"reps":12,"weight":22.68,"rpe":"moderate","notes":null}]},{"id":"6934c95f8e8e2e65df9a67fb","name":"Underhand Cable Front Raises (Chest Focus)","type":"strength","sets":[{"reps":10,"weight":4.54,"rpe":"moderate","notes":null},{"reps":10,"weight":4.54,"rpe":"moderate","notes":null},{"reps":12,"weight":4.54,"rpe":"challenging","notes":null}]},{"id":"69378a9c4874866f3d6b6f7a","name":"Tricep cable overhead extension","type":"strength","sets":[{"reps":10,"weight":6.8,"rpe":"challenging","notes":null},{"reps":12,"weight":6.8,"rpe":"challenging","notes":null},{"reps":12,"weight":4.54,"rpe":"easy","notes":null}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":8,"weight":6.8,"rpe":"challenging","notes":null},{"reps":8,"weight":6.8,"rpe":"challenging","notes":null},{"reps":8,"weight":6.8,"rpe":"challenging","notes":null}]},{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":6,"weight":18.14,"rpe":"challenging","notes":null},{"reps":6,"weight":18.14,"rpe":"challenging","notes":null},{"reps":5,"weight":22.68,"rpe":"max_effort","notes":"Roc-er machine"}]}],"notes":"","prs":[]},{"id":"693ae90975875fc0d155e965","name":"Back Day","date":"2025-12-11T15:53:41.901Z","duration":0,"exercises":[{"id":"693751b7e13ac6364277dc2f","name":"V-Grip Cable row","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null}]},{"id":"691e8b0d577bdb82682db4f3","name":"Lat Pulldown (Wide Grip)","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"max_effort","notes":null}]},{"id":"6934c6e992a3efdefd510cfb","name":"Back extension","type":"strength","sets":[{"reps":10,"weight":11.34,"rpe":"moderate","notes":"Hold weight close to chest and round back to bias lower back"},{"reps":12,"weight":11.34,"rpe":"moderate","notes":null},{"reps":12,"weight":11.34,"rpe":"moderate","notes":null}]},{"id":"691e8d7a72018c0c6b6dd5f1","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":"challenging","notes":"[SUPERSET:ss_1765470331967_n8hntbleq]"},{"reps":12,"weight":22.68,"rpe":"moderate","notes":"[SUPERSET:ss_1765470331967_n8hntbleq]"},{"reps":10,"weight":22.68,"rpe":"moderate","notes":"[SUPERSET:ss_1765470331967_n8hntbleq]"}]},{"id":"692ccaa69c5bf13c146f27bb","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"moderate","notes":"[SUPERSET:ss_1765470331967_n8hntbleq]"},{"reps":10,"weight":27.22,"rpe":"moderate","notes":"[SUPERSET:ss_1765470331967_n8hntbleq]"},{"reps":12,"weight":27.22,"rpe":"moderate","notes":"[SUPERSET:ss_1765470331967_n8hntbleq]"}]}],"notes":"Before office, short on time","prs":[]},{"id":"6940ae6b5836ce21dbe4cd79","name":"Push day","date":"2025-12-16T00:57:14.840Z","duration":0,"exercises":[{"id":"6940aea00c11653edbf1fe24","name":"Decline Bench Press","type":"strength","sets":[{"reps":6,"weight":34.02,"rpe":"max_effort","notes":null},{"reps":6,"weight":34.02,"rpe":"challenging","notes":null},{"reps":5,"weight":34.02,"rpe":"challenging","notes":null},{"reps":5,"weight":34.02,"rpe":"challenging","notes":"Wrist feels a bit weak, pause after third rep"}]},{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":8,"weight":17.24,"rpe":"max_effort","notes":null},{"reps":9,"weight":17.24,"rpe":"max_effort","notes":null},{"reps":12,"weight":17.24,"rpe":"max_effort","notes":"To failure"}]},{"id":"691e8c7d2502a55a25450e56","name":"Barbell Bench Press","type":"strength","sets":[{"reps":6,"weight":29.48,"rpe":"challenging","notes":null},{"reps":8,"weight":29.48,"rpe":"challenging","notes":null},{"reps":6,"weight":29.48,"rpe":"moderate","notes":"Improved wrist position, easier overall"}]},{"id":"69249ad799a37da3f67283d1","name":"Cable Flyes (Chest Height)","type":"strength","sets":[{"reps":12,"weight":6.8,"rpe":"moderate","notes":null},{"reps":12,"weight":2.27,"rpe":"easy","notes":null},{"reps":12,"weight":6.8,"rpe":"moderate","notes":"Raised cables higher (level3), improved form and muscle engagement"}]}],"notes":"","prs":[]},{"id":"6943444e7b70bbc1051c817a","name":"Leg Day","date":"2025-12-18T00:01:18.819Z","duration":0,"exercises":[{"id":"694344797e4811d64098d17c","name":"Deadlift","type":"strength","sets":[{"reps":6,"weight":61.23,"rpe":"challenging","notes":null},{"reps":6,"weight":61.23,"rpe":"challenging","notes":null},{"reps":4,"weight":70.31,"rpe":"max_effort","notes":null}]},{"id":"6934bf8678748aa3e59b36d0","name":"Smith machine RDL","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"max_effort","notes":null},{"reps":8,"weight":40.82,"rpe":"max_effort","notes":null}]},{"id":"6943521daa05b2217ce04d04","name":"Hamstring curl","type":"strength","sets":[{"reps":11,"weight":72.57,"rpe":"max_effort","notes":null},{"reps":12,"weight":63.5,"rpe":"moderate","notes":null}]},{"id":"69434fe52f9fba72cb207965","name":"Cable abductors","type":"strength","sets":[{"reps":12,"weight":9.07,"rpe":"moderate","notes":null},{"reps":12,"weight":9.07,"rpe":"challenging","notes":null},{"reps":10,"weight":9.07,"rpe":"challenging","notes":null}]},{"id":"69434c11354fa46807547915","name":"Cable kickbacks","type":"strength","sets":[{"reps":12,"weight":15.88,"rpe":"challenging","notes":null},{"reps":12,"weight":13.61,"rpe":"moderate","notes":null},{"reps":12,"weight":11.34,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"69471ad94a6146ca7c3746dd","name":"Pull Day","date":"2025-12-20T21:53:29.810Z","duration":0,"exercises":[{"id":"693751b7e13ac6364277dc2f","name":"V-Grip Cable row","type":"strength","sets":[{"reps":10,"weight":31.75,"rpe":"moderate","notes":null},{"reps":10,"weight":31.75,"rpe":"challenging","notes":null},{"reps":10,"weight":31.75,"rpe":"moderate","notes":"Tucked elbow in to target lats and remove load from triceps"}]},{"id":"694723b62c35c9255069b877","name":"Seated bicep curl","type":"strength","sets":[{"reps":10,"weight":13.61,"rpe":"moderate","notes":null},{"reps":10,"weight":13.61,"rpe":"challenging","notes":null}]},{"id":"694473e4dedf52bbadaee9c6","name":"Diverging Lat Pulldown Machine","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"easy","notes":null},{"reps":12,"weight":18.14,"rpe":"easy","notes":null},{"reps":12,"weight":22.68,"rpe":"easy","notes":null}]},{"id":"69471d433d0ef8c4610d7b3f","name":"Landmine rows","type":"strength","sets":[{"reps":10,"weight":15.88,"rpe":"moderate","notes":null},{"reps":10,"weight":15.88,"rpe":"moderate","notes":null},{"reps":10,"weight":15.88,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"694f0ac7f4531c1b015c1408","name":"Shoulders and arms","date":"2025-12-26T22:23:03.240Z","duration":0,"exercises":[{"id":"694f319f05e923e5ce42b4b8","name":"Machine Dips","type":"bodyweight","sets":[{"reps":10,"weight":38.56,"rpe":"challenging","notes":null},{"reps":10,"weight":38.56,"rpe":"moderate","notes":null},{"reps":12,"weight":38.56,"rpe":"challenging","notes":null}]},{"id":"692de1cb7c3a39fb760a9cec","name":"Machine Shoulder Press","type":"strength","sets":[{"reps":10,"weight":17.24,"rpe":"max_effort","notes":null},{"reps":9,"weight":26.31,"rpe":"max_effort","notes":"Dropped to 38 after rep 5"},{"reps":8,"weight":26.31,"rpe":"max_effort","notes":null}]},{"id":"694723b62c35c9255069b877","name":"Seated bicep curl","type":"strength","sets":[{"reps":12,"weight":13.61,"rpe":"moderate","notes":null},{"reps":12,"weight":13.61,"rpe":"moderate","notes":null},{"reps":12,"weight":13.61,"rpe":"challenging","notes":null}]},{"id":"69249ddcec619630a44a640e","name":"Cable Lateral Raise","type":"strength","sets":[{"reps":10,"weight":9.07,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"695990d2d39867a0c34090f3","name":"Back day","date":"2026-01-03T21:57:38.158Z","duration":0,"exercises":[{"id":"6924a04e1ea8049956015529","name":"Single Cable Pushdown","type":"strength","sets":[{"reps":12,"weight":9.07,"rpe":"challenging","notes":null},{"reps":12,"weight":9.07,"rpe":"moderate","notes":null},{"reps":12,"weight":9.07,"rpe":"moderate","notes":null}]},{"id":"694473e4dedf52bbadaee9c6","name":"Diverging Lat Pulldown Machine","type":"strength","sets":[{"reps":12,"weight":31.75,"rpe":"moderate","notes":null},{"reps":10,"weight":36.29,"rpe":"moderate","notes":"Kept wrist out turned - better lay targeting "},{"reps":12,"weight":36.29,"rpe":"moderate","notes":null}]},{"id":"6942f2f7b9f34fe4d292ddec","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":8,"weight":31.75,"rpe":"challenging","notes":null},{"reps":10,"weight":31.75,"rpe":"challenging","notes":null},{"reps":10,"weight":31.75,"rpe":"challenging","notes":null}]},{"id":"69599aca5b0316658505e1f2","name":"Cable row","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"695c6efe7685b91423043b89","name":"Leg Day","date":"2026-01-06T02:10:06.634Z","duration":0,"exercises":[{"id":"6934bf8678748aa3e59b36d0","name":"Smith machine RDL","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":10,"weight":40.82,"rpe":"challenging","notes":null},{"reps":10,"weight":40.82,"rpe":"challenging","notes":null}]},{"id":"695c6f2b0c8b9a2808126d05","name":"Lying leg press machine","type":"strength","sets":[{"reps":10,"weight":63.5,"rpe":"moderate","notes":null},{"reps":10,"weight":72.57,"rpe":"moderate","notes":null},{"reps":10,"weight":72.57,"rpe":"moderate","notes":null}]},{"id":"6934cad722dc75514b910ff3","name":"Standing Calf Raise","type":"strength","sets":[{"reps":12,"weight":81.65,"rpe":"moderate","notes":null},{"reps":12,"weight":81.65,"rpe":"moderate","notes":null},{"reps":12,"weight":81.65,"rpe":"moderate","notes":null}]}],"notes":"Short leg day","prs":[]},{"id":"6960624bb92818c988104e7d","name":"Push Day","date":"2026-01-09T02:04:59.192Z","duration":0,"exercises":[{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":8,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1767925214948]"},{"reps":8,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1767925214948]"},{"reps":10,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1767925214948]"}]},{"id":"6944116fd7873c02946130cd","name":"Bench Press (Dumbell)","type":"strength","sets":[{"reps":8,"weight":13.61,"rpe":"challenging","notes":null},{"reps":8,"weight":13.61,"rpe":"challenging","notes":null},{"reps":6,"weight":13.61,"rpe":"challenging","notes":null}]},{"id":"692f0c44b8abbfbf184cccac","name":"Dumbbell bench flyes","type":"strength","sets":[{"reps":10,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1767925214948]"},{"reps":10,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1767925214948]"},{"reps":10,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1767925214948]"}]},{"id":"6934c95f8e8e2e65df9a67fb","name":"Underhand Cable Front Raises (Chest Focus)","type":"strength","sets":[{"reps":10,"weight":4.54,"rpe":"challenging","notes":null},{"reps":10,"weight":4.54,"rpe":"moderate","notes":null},{"reps":10,"weight":4.54,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"6965a8e31cba19608a24b0ff","name":"Back Day","date":"2026-01-13T02:07:30.775Z","duration":0,"exercises":[{"id":"69471d433d0ef8c4610d7b3f","name":"Landmine rows","type":"strength","sets":[{"reps":10,"weight":20.41,"rpe":"challenging","notes":null},{"reps":10,"weight":15.88,"rpe":"moderate","notes":null},{"reps":10,"weight":20.41,"rpe":"challenging","notes":null}]},{"id":"6930e3f0b83811248669a3e7","name":"Machine Lat Pulldown (weight loaded)","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"moderate","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":7,"weight":40.82,"rpe":"max_effort","notes":null}]},{"id":"6930ed6ddac9b834bdf1c542","name":"Loaded Machine Row (Single Arm)","type":"strength","sets":[{"reps":10,"weight":27.22,"rpe":"easy","notes":null},{"reps":10,"weight":36.29,"rpe":"moderate","notes":null},{"reps":10,"weight":36.29,"rpe":"moderate","notes":null}]},{"id":"6942f2f7b9f34fe4d292ddec","name":"Cable Face Pull (High)","type":"strength","sets":[{"reps":10,"weight":31.75,"rpe":"moderate","notes":null},{"reps":10,"weight":31.75,"rpe":"moderate","notes":null},{"reps":8,"weight":36.29,"rpe":"challenging","notes":null}]},{"id":"6965afde95c60c4ff5f6d90e","name":"Tricep Rope Pushdown","type":"strength","sets":[{"reps":12,"weight":22.68,"rpe":"moderate","notes":null},{"reps":12,"weight":22.68,"rpe":"moderate","notes":null},{"reps":12,"weight":22.68,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"696868c548fce104d9e1988b","name":"Leg day","date":"2026-01-15T04:10:45.634Z","duration":0,"exercises":[{"id":"6968690c7e661fd6d8bb61a0","name":"Seated Calf Raise","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"moderate","notes":"[SUPERSET:ss_1768450374944]"},{"reps":12,"weight":27.22,"rpe":null,"notes":"[SUPERSET:ss_1768450374944]"},{"reps":12,"weight":27.22,"rpe":null,"notes":"[SUPERSET:ss_1768450374944]"}]},{"id":"695c6f2b0c8b9a2808126d05","name":"Lying leg press machine","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"challenging","notes":"[SUPERSET:ss_1768450374944]"},{"reps":8,"weight":40.82,"rpe":"challenging","notes":"[SUPERSET:ss_1768450374944]"},{"reps":8,"weight":40.82,"rpe":"challenging","notes":"[SUPERSET:ss_1768450374944]"}]},{"id":"69686de2e6d88ae8e4216597","name":"Dumbbell RDL","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"moderate","notes":"2x30lbs"},{"reps":12,"weight":31.75,"rpe":"challenging","notes":null},{"reps":12,"weight":31.75,"rpe":"moderate","notes":null}]},{"id":"6943521daa05b2217ce04d04","name":"Hamstring curl","type":"strength","sets":[{"reps":8,"weight":72.57,"rpe":"challenging","notes":null},{"reps":12,"weight":72.57,"rpe":"challenging","notes":"[SUPERSET:ss_1768452188245]"},{"reps":10,"weight":72.57,"rpe":"challenging","notes":null}]},{"id":"6928875a5cb53e9f3bc61418","name":"Leg Extension","type":"strength","sets":[{"reps":10,"weight":38.56,"rpe":"challenging","notes":"[SUPERSET:ss_1768452188245]"},{"reps":10,"weight":38.56,"rpe":"challenging","notes":"[SUPERSET:ss_1768452188245]"},{"reps":12,"weight":38.56,"rpe":"challenging","notes":"[SUPERSET:ss_1768452188245]"}]}],"notes":"","prs":[]},{"id":"69703ddbf3f74f710ed8e966","name":"Booty day","date":"2026-01-21T02:45:46.917Z","duration":0,"exercises":[{"id":"6970419776a42683deb7e74e","name":"Glute master","type":"strength","sets":[{"reps":10,"weight":17.24,"rpe":"challenging","notes":null},{"reps":10,"weight":17.24,"rpe":"moderate","notes":null},{"reps":10,"weight":17.24,"rpe":"challenging","notes":null}]},{"id":"69703dfe56fcc0cd93ff6bec","name":"Hip thrust","type":"strength","sets":[{"reps":10,"weight":49.9,"rpe":"challenging","notes":null},{"reps":10,"weight":49.9,"rpe":"challenging","notes":null},{"reps":10,"weight":59.87,"rpe":"challenging","notes":null}]},{"id":"692cc72cfa99983bee6c7e61","name":"Hip Abduction (Outer Thigh)","type":"strength","sets":[{"reps":12,"weight":40.82,"rpe":"moderate","notes":null},{"reps":12,"weight":45.36,"rpe":"challenging","notes":null},{"reps":12,"weight":49.9,"rpe":"max_effort","notes":null}]},{"id":"6970450abb509395eb9c51fe","name":"Prone Leg Curls","type":"strength","sets":[{"reps":8,"weight":27.22,"rpe":"challenging","notes":null},{"reps":12,"weight":27.22,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"6972ce2126609365419af23a","name":"Back day","date":"2026-01-23T01:25:52.147Z","duration":0,"exercises":[{"id":"6930e3f0b83811248669a3e7","name":"Machine Lat Pulldown (weight loaded)","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"moderate","notes":"Underhand grip"},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":6,"weight":45.36,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"6976a552b38d9154f2262d32","name":"Chest and shoulders","date":"2026-01-25T23:20:50.227Z","duration":0,"exercises":[{"id":"6930ed8adcb97cdcd8f273f4","name":"Seated Dumbbell Shoulder Press","type":"strength","sets":[{"reps":12,"weight":7.94,"rpe":"moderate","notes":null},{"reps":12,"weight":7.94,"rpe":"moderate","notes":null},{"reps":10,"weight":10.21,"rpe":"challenging","notes":null}]},{"id":"6976a572e47893029ead81e6","name":"Bench Press (Dumbell)","type":"strength","sets":[{"reps":8,"weight":27.22,"rpe":"challenging","notes":"2x30s"},{"reps":8,"weight":27.22,"rpe":"challenging","notes":null},{"reps":8,"weight":27.22,"rpe":"challenging","notes":null}]},{"id":"692f0c44b8abbfbf184cccac","name":"Dumbbell bench flyes","type":"strength","sets":[{"reps":12,"weight":5.67,"rpe":"moderate","notes":null},{"reps":12,"weight":5.67,"rpe":"moderate","notes":null},{"reps":12,"weight":5.67,"rpe":"challenging","notes":null}]},{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":12,"weight":5.67,"rpe":"moderate","notes":null},{"reps":12,"weight":5.67,"rpe":"moderate","notes":null},{"reps":10,"weight":6.8,"rpe":"challenging","notes":null}]},{"id":"6934c95f8e8e2e65df9a67fb","name":"Underhand Cable Front Raises (Chest Focus)","type":"strength","sets":[{"reps":10,"weight":4.54,"rpe":"challenging","notes":null},{"reps":10,"weight":4.54,"rpe":"moderate","notes":null},{"reps":10,"weight":4.54,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"697ab79d8a8a511799e85be8","name":"Leg Day","date":"2026-01-29T01:27:57.728Z","duration":0,"exercises":[{"id":"6968690c7e661fd6d8bb61a0","name":"Seated Calf Raise","type":"strength","sets":[{"reps":12,"weight":40.82,"rpe":"challenging","notes":"[SUPERSET:ss_1769650979825]"},{"reps":12,"weight":40.82,"rpe":"moderate","notes":"[SUPERSET:ss_1769650979825]"},{"reps":12,"weight":40.82,"rpe":"challenging","notes":"[SUPERSET:ss_1769650979825]"}]},{"id":"694344797e4811d64098d17c","name":"Deadlift","type":"strength","sets":[{"reps":6,"weight":61.23,"rpe":"challenging","notes":null},{"reps":6,"weight":61.23,"rpe":"challenging","notes":null},{"reps":7,"weight":61.23,"rpe":"max_effort","notes":null}]},{"id":"695c6f2b0c8b9a2808126d05","name":"Lying leg press machine","type":"strength","sets":[{"reps":10,"weight":81.65,"rpe":"moderate","notes":"[SUPERSET:ss_1769650979825]"},{"reps":10,"weight":81.65,"rpe":"moderate","notes":"[SUPERSET:ss_1769650979825]"},{"reps":10,"weight":81.65,"rpe":"moderate","notes":"[SUPERSET:ss_1769650979825]"}]}],"notes":"","prs":[]},{"id":"6983e253b1bd1dfef71438ba","name":"Chest and shoulders","date":"2026-02-05T00:20:35.042Z","duration":0,"exercises":[{"id":"69716b1e56d07475eadb1ade","name":"Incline Dumbbell Bench Press","type":"strength","sets":[{"reps":8,"weight":10.21,"rpe":"challenging","notes":null},{"reps":6,"weight":12.47,"rpe":"challenging","notes":null},{"reps":8,"weight":10.21,"rpe":"challenging","notes":null}]},{"id":"6981491286e4716c2f030f4c","name":"Barbell Bench Press","type":"strength","sets":[{"reps":6,"weight":29.48,"rpe":"moderate","notes":null},{"reps":5,"weight":38.56,"rpe":"max_effort","notes":"Had a spot, hit 7 with assistance on last 2"},{"reps":6,"weight":34.02,"rpe":"challenging","notes":null},{"reps":6,"weight":29.48,"rpe":"moderate","notes":null}]},{"id":"6930ed8adcb97cdcd8f273f4","name":"Seated Dumbbell Shoulder Press","type":"strength","sets":[{"reps":8,"weight":7.94,"rpe":"moderate","notes":null},{"reps":10,"weight":7.94,"rpe":"moderate","notes":null},{"reps":10,"weight":7.94,"rpe":"challenging","notes":null}]},{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":10,"weight":5.67,"rpe":"challenging","notes":null},{"reps":12,"weight":5.67,"rpe":"challenging","notes":null},{"reps":12,"weight":5.67,"rpe":null,"notes":null}]}],"notes":"","prs":[]},{"id":"698be44f0564344592fcb1fa","name":"Leg day","date":"2026-02-11T02:07:11.559Z","duration":0,"exercises":[{"id":"695c6f2b0c8b9a2808126d05","name":"Lying leg press machine","type":"strength","sets":[{"reps":8,"weight":88.45,"rpe":"challenging","notes":null},{"reps":8,"weight":88.45,"rpe":"challenging","notes":null},{"reps":8,"weight":88.45,"rpe":"max_effort","notes":null}]},{"id":"69703dfe56fcc0cd93ff6bec","name":"Hip thrust","type":"strength","sets":[{"reps":8,"weight":49.9,"rpe":"challenging","notes":null},{"reps":10,"weight":49.9,"rpe":"challenging","notes":null},{"reps":10,"weight":49.9,"rpe":"challenging","notes":null}]},{"id":"6934bf8678748aa3e59b36d0","name":"Smith machine RDL","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"moderate","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"moderate","notes":null}]},{"id":"6943521daa05b2217ce04d04","name":"Hamstring curl","type":"strength","sets":[{"reps":10,"weight":72.57,"rpe":"moderate","notes":null},{"reps":10,"weight":72.57,"rpe":"challenging","notes":null},{"reps":8,"weight":72.57,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"69910e79a1b2dffc5430ec28","name":"Back day","date":"2026-02-15T00:08:24.835Z","duration":0,"exercises":[{"id":"6991139252853fe3e0efb863","name":"Cable lat pushdown","type":"strength","sets":[{"reps":10,"weight":27.22,"rpe":"challenging","notes":null},{"reps":10,"weight":27.22,"rpe":"challenging","notes":null},{"reps":10,"weight":27.22,"rpe":"max_effort","notes":null}]},{"id":"69446f94025e7f2e17029dc2","name":"Lat Pulldown (Cable) - V-Grip","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"challenging","notes":null},{"reps":8,"weight":40.82,"rpe":"max_effort","notes":null},{"reps":7,"weight":40.82,"rpe":"max_effort","notes":null}]},{"id":"693751b7e13ac6364277dc2f","name":"V-Grip Cable row","type":"strength","sets":[{"reps":8,"weight":36.29,"rpe":"max_effort","notes":null},{"reps":8,"weight":36.29,"rpe":"max_effort","notes":null},{"reps":8,"weight":36.29,"rpe":"max_effort","notes":null}]},{"id":"699115c552853fe3e0efb9f1","name":"Tricep extension (bar)","type":"strength","sets":[{"reps":10,"weight":18.14,"rpe":"challenging","notes":null},{"reps":12,"weight":18.14,"rpe":"moderate","notes":null},{"reps":12,"weight":18.14,"rpe":"moderate","notes":null}]},{"id":"6934c6e992a3efdefd510cfb","name":"Back extension","type":"strength","sets":[{"reps":12,"weight":11.34,"rpe":"moderate","notes":null},{"reps":12,"weight":11.34,"rpe":"moderate","notes":null},{"reps":12,"weight":15.88,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]},{"id":"69969dd35914fcd1831f90ff","name":"Quick chest and shoulders","date":"2026-02-19T05:21:23.767Z","duration":0,"exercises":[{"id":"692f0c44b8abbfbf184cccac","name":"Dumbbell bench flyes","type":"strength","sets":[{"reps":10,"weight":6.8,"rpe":"challenging","notes":"[SUPERSET:ss_1771479693544]"},{"reps":12,"weight":5.67,"rpe":"moderate","notes":null},{"reps":12,"weight":5.67,"rpe":"moderate","notes":"[SUPERSET:ss_1771479693544]"}]},{"id":"69716b1e56d07475eadb1ade","name":"Incline Dumbbell Bench Press","type":"strength","sets":[{"reps":8,"weight":11.34,"rpe":"challenging","notes":"[SUPERSET:ss_1771478558289]"},{"reps":8,"weight":11.34,"rpe":"challenging","notes":"[SUPERSET:ss_1771478558289]"},{"reps":8,"weight":11.34,"rpe":null,"notes":"[SUPERSET:ss_1771478558289]"}]},{"id":"694c2d92f072eb0876dd69f4","name":"Standing Dumbbell Lateral Raise","type":"strength","sets":[{"reps":12,"weight":5.67,"rpe":"moderate","notes":"[SUPERSET:ss_1771478558289]"},{"reps":10,"weight":5.67,"rpe":null,"notes":"[SUPERSET:ss_1771478558289]"},{"reps":10,"weight":5.67,"rpe":"challenging","notes":"[SUPERSET:ss_1771478558289]"}]},{"id":"692f0cdebcb7d41a0eacb58c","name":"Dumbbell front raises","type":"strength","sets":[{"reps":10,"weight":5.67,"rpe":"moderate","notes":"[SUPERSET:ss_1771479693544]"},{"reps":10,"weight":5.67,"rpe":"moderate","notes":"[SUPERSET:ss_1771479693544]"},{"reps":12,"weight":5.67,"rpe":"moderate","notes":"[SUPERSET:ss_1771479693544]"}]}],"notes":"","prs":[]},{"id":"69990ecff920531a9ac7304a","name":"Legs","date":"2026-02-21T01:47:59.597Z","duration":0,"exercises":[{"id":"69990ee6d3216a58a52e78e9","name":"Leg Press","type":"strength","sets":[{"reps":12,"weight":54.43,"rpe":"moderate","notes":null},{"reps":10,"weight":63.5,"rpe":"challenging","notes":null},{"reps":8,"weight":63.5,"rpe":"max_effort","notes":null}]},{"id":"6934cad722dc75514b910ff3","name":"Standing Calf Raise","type":"strength","sets":[{"reps":12,"weight":81.65,"rpe":"moderate","notes":null},{"reps":12,"weight":81.65,"rpe":"moderate","notes":null},{"reps":12,"weight":92.99,"rpe":"moderate","notes":null}]},{"id":"69434fe52f9fba72cb207965","name":"Cable abductors","type":"strength","sets":[{"reps":12,"weight":13.61,"rpe":"challenging","notes":"[SUPERSET:ss_1771640145649]"},{"reps":10,"weight":13.61,"rpe":"challenging","notes":"[SUPERSET:ss_1771640145649]"},{"reps":10,"weight":13.61,"rpe":"challenging","notes":"[SUPERSET:ss_1771640145649]"}]},{"id":"69434c11354fa46807547915","name":"Cable kickbacks","type":"strength","sets":[{"reps":12,"weight":18.14,"rpe":"moderate","notes":"[SUPERSET:ss_1771640145649]"},{"reps":12,"weight":22.68,"rpe":"challenging","notes":"[SUPERSET:ss_1771640145649]"},{"reps":12,"weight":22.68,"rpe":"moderate","notes":null}]},{"id":"6943521daa05b2217ce04d04","name":"Hamstring curl","type":"strength","sets":[{"reps":10,"weight":72.57,"rpe":"moderate","notes":null},{"reps":12,"weight":72.57,"rpe":"challenging","notes":null},{"reps":12,"weight":72.57,"rpe":"max_effort","notes":null}]}],"notes":"","prs":[]},{"id":"699cff82f2828f4318f62758","name":"Back day","date":"2026-02-24T01:31:46.639Z","duration":0,"exercises":[{"id":"69446f94025e7f2e17029dc2","name":"Lat Pulldown (Cable) - V-Grip","type":"strength","sets":[{"reps":8,"weight":40.82,"rpe":"max_effort","notes":null},{"reps":10,"weight":40.82,"rpe":"challenging","notes":null},{"reps":12,"weight":34.02,"rpe":"moderate","notes":null}]},{"id":"699cfe08ce7968d4a0e75967","name":"Barbell Row","type":"strength","sets":[{"reps":8,"weight":38.56,"rpe":"moderate","notes":null},{"reps":10,"weight":34.02,"rpe":"moderate","notes":null},{"reps":12,"weight":29.48,"rpe":"moderate","notes":null}]},{"id":"69599aca5b0316658505e1f2","name":"Cable row","type":"strength","sets":[{"reps":12,"weight":27.22,"rpe":"challenging","notes":null},{"reps":8,"weight":34.02,"rpe":"challenging","notes":null},{"reps":10,"weight":27.22,"rpe":"moderate","notes":null}]}],"notes":"","prs":[]},{"id":"69aafaf680922e79b41784e3","name":"Back day","date":"2026-03-06T16:04:05.993Z","duration":0,"exercises":[{"id":"693751b7e13ac6364277dc2f","name":"V-Grip Cable row","type":"strength","sets":[{"reps":8,"weight":34.02,"rpe":"challenging","notes":null},{"reps":8,"weight":34.02,"rpe":"challenging","notes":null},{"reps":10,"weight":34.02,"rpe":"moderate","notes":null}]},{"id":"69471d433d0ef8c4610d7b3f","name":"Landmine rows","type":"strength","sets":[{"reps":10,"weight":18.14,"rpe":"moderate","notes":null},{"reps":8,"weight":20.41,"rpe":"challenging","notes":null},{"reps":8,"weight":21.55,"rpe":"challenging","notes":null}]},{"id":"6930e3f0b83811248669a3e7","name":"Machine Lat Pulldown (weight loaded)","type":"strength","sets":[{"reps":10,"weight":40.82,"rpe":"challenging","notes":"Started compensating with biceps"},{"reps":10,"weight":40.82,"rpe":"moderate","notes":null},{"reps":8,"weight":40.82,"rpe":"challenging","notes":null}]},{"id":"69ab0357bb2655b96119d03b","name":"Dumbbell bicep curl","type":"strength","sets":[{"reps":10,"weight":5.67,"rpe":"moderate","notes":null},{"reps":10,"weight":5.67,"rpe":"challenging","notes":null},{"reps":10,"weight":5.67,"rpe":"challenging","notes":null}]}],"notes":"","prs":[]}]};

// ═══ STATE ═══
let currentUser = null;
let workouts = [];
let templates = [];
let customExercises = {strength:[],bodyweight:[],cardio:[]};
let activeWorkout = null;
let currentScreen = 'home';
let timerInterval = null;
let timerSeconds = 0;
let swInterval = null;
let swMs = 0;
let swRunning = false;
let swLaps = [];
let progressTab = 'lifts';
let progressEx = null;
let prSelectedEx = null;
let prAiLoading = false;
let editingWorkout = null; // {idx, workout} when editing a past session
let selectedExBrief = null;
let openExStats = null;
let openExBlockStats = new Set(); // ei indices with stats panel open in log
let coachDebriefLoading = false;
let splitAnswers = {};
let splitStep = 0;
let calSelectedKey = null;
let historySearch = '';
let historyFilter = 'All';
let microCoachMsg = '';
let onboardingStep = 0;
let coachFeedOpen = false;
let swExpanded = false;

// ═══ UNIT PREF ═══
function getUnit(){return DB.get('unit_'+(currentUser||'_'),'kg');}
function setUnit(u){DB.set('unit_'+(currentUser||'_'),u);render();}
function wUnit(){return getUnit();}
function dispW(kg){
  if(!kg&&kg!==0)return null;
  const v=parseFloat(kg);
  if(isNaN(v))return kg;
  return getUnit()==='lbs'?Math.round(v*2.20462*4)/4:v;
}
function fmtW(kg){
  const v=dispW(kg);
  if(!v&&v!==0)return 'BW';
  return v%1===0?v.toString():parseFloat(v.toFixed(2)).toString();
}
function toKg(val){
  const n=parseFloat(val);
  if(isNaN(n))return undefined;
  return getUnit()==='lbs'?Math.round(n/2.20462*100)/100:n;
}
function fmtVol(kgVol){
  const v=getUnit()==='lbs'?kgVol*2.20462:kgVol;
  if(v>=1000)return (v/1000).toFixed(1)+'t';
  return Math.round(v)+'';
}

// ═══ SAVE / LOAD ═══
function save(){
  if(!currentUser)return;
  DB.set('workouts_'+currentUser,workouts);
  DB.set('templates_'+currentUser,templates);
  DB.set('custom_exercises_'+currentUser,customExercises);
}
function loadUserData(){
  if(!currentUser)return;
  workouts=DB.get('workouts_'+currentUser,null);
  if(workouts===null){DB.set('workouts_'+currentUser,SEED_DATA[currentUser]||[]);workouts=SEED_DATA[currentUser]||[];}
  templates=DB.get('templates_'+currentUser,[]);
  customExercises=DB.get('custom_exercises_'+currentUser,{strength:[],bodyweight:[],cardio:[]});
  // Register any saved custom exercises into maps
  migrateCustomEx();
  ['strength','bodyweight','cardio'].forEach(t=>{
    (customExercises[t]||[]).forEach(e=>{ if(typeof e==='object'&&e.name) registerCustomExInMaps(e); });
  });
}

// ═══ EXERCISE LIBRARY ═══
const EXERCISES = {
  strength:['Bench press','Squat','Deadlift','Overhead press','Barbell row','Incline Dumbbell Bench Press','Barbell Bench Press','Barbell Deadlift','Decline Bench Press','Close Grip Bench Press','Pull-up','Dumbbell curl','Tricep pushdown','Leg press','Romanian deadlift','Lat Pulldown (Wide Grip)','Lat Pulldown (Cable) - V-Grip','Cable row','Seated Cable row','V-Grip Cable row','Machine Shoulder Press','Seated Dumbbell Shoulder Press','Cable Lateral Raise','Standing Dumbbell Lateral Raise','Seated Lateral Raise (Dumbbell)','Cable Face Pull (High)','Rear Delt Flyes (Dumbbell)','Tricep Rope Pushdown','Cable Curl','Preacher Curl','Dumbbell Hammer Curl','Lat Rope Pushdown','Leg Extension','Leg Curl','Seated Calf Raise','Standing Calf Raise','Hip thrust','Bulgarian Split Squat','Loaded Machine Row (Single Arm)','Machine Press (weight loaded)'],
  bodyweight:['Push-up','Pull-up','Dip','Chin-up','Body weight dips (on dip bars)','Weighted Chin-Ups','Weighted Pull-Ups','Machine Dips','Inverted row','Pike push-up','Pistol squat','Nordic curl','Hollow hold','Plank','L-sit','Muscle-up','Handstand push-up','Sissy Squat','Jump Squats'],
  cardio:['Running','Cycling','Rowing','Swimming','Jump rope','Elliptical','Stair climber','HIIT sprint','Walk','Ski erg','Air bike','Sled push']
};
function migrateCustomEx(){
  // Migrate old string arrays to object format transparently
  ['strength','bodyweight','cardio'].forEach(t=>{
    if(!customExercises[t]) customExercises[t]=[];
    customExercises[t]=customExercises[t].map(e=>typeof e==='string'?{name:e,muscles:[],pattern:'',equipment:'',type:t}:e);
  });
}
function allExercises(type){
  migrateCustomEx();
  const names=(EXERCISES[type]||[]).slice();
  (customExercises[type]||[]).forEach(e=>{const n=typeof e==='string'?e:e.name;if(!names.includes(n))names.push(n);});
  return names;
}
function getCustomExMeta(name){
  migrateCustomEx();
  for(const t of['strength','bodyweight','cardio']){
    const found=(customExercises[t]||[]).find(e=>(typeof e==='string'?e:e.name)===name);
    if(found)return typeof found==='string'?null:found;
  }
  return null;
}
function registerCustomExInMaps(meta){
  // Inject into MUSCLE_MAP so heatmap + suggestions work immediately
  if(meta.muscles&&meta.muscles.length) MUSCLE_MAP[meta.name]=meta.muscles;
  // Inject into SESSION_CONTEXTS based on pattern
  const patternCtxMap={
    push:['push','chest','shoulders'],pull:['pull','back'],
    squat:['legs'],hinge:['legs','glutes'],isolation:[]
  };
  const ctxKeys=patternCtxMap[meta.pattern]||[];
  ctxKeys.forEach(ctxKey=>{
    if(SESSION_CONTEXTS[ctxKey]&&!SESSION_CONTEXTS[ctxKey].exercises.includes(meta.name)){
      SESSION_CONTEXTS[ctxKey].exercises.push(meta.name);
    }
  });
  // Also add to muscle-group contexts
  (meta.muscles||[]).forEach(m=>{
    if(SESSION_CONTEXTS[m]&&!SESSION_CONTEXTS[m].exercises.includes(meta.name)){
      SESSION_CONTEXTS[m].exercises.push(meta.name);
    }
  });
}


// ════════════════════════════════════════════
// SESSION CONTEXT ENGINE
// ════════════════════════════════════════════

// Map workout name keywords → muscle context
const SESSION_CONTEXTS = {
  push:      { label:'Push', muscles:['chest','shoulders','triceps'],
               exercises:['Barbell Bench Press','Incline Dumbbell Bench Press','Machine Press (weight loaded)',
                          'Bench Press (Dumbell)','Decline Bench Press','Machine Shoulder Press',
                          'Seated Dumbbell Shoulder Press','Cable Lateral Raise','Standing Dumbbell Lateral Raise',
                          'Tricep Rope Pushdown','Cable Face Pull (High)','Overhead press',
                          'Body weight dips (on dip bars)','Machine Dips','Dumbbell bench flyes',
                          'Cable Flyes (Chest Height)','Bradford Press','Rear Delt Flyes (Dumbbell)'] },
  pull:      { label:'Pull', muscles:['back','biceps'],
               exercises:['Barbell Deadlift','Barbell Row','V-Grip Cable row','Lat Pulldown (Wide Grip)',
                          'Lat Pulldown (Cable) - V-Grip','Cable row','Seated Cable row',
                          'Loaded Machine Row (Single Arm)','Cable Curl','Preacher Curl',
                          'Dumbbell Hammer Curl','Weighted Pull-Ups','Weighted Chin-Ups',
                          'Single Arm Lat Pulldown','Lat Rope Pushdown','Smith Machine Barbell Row',
                          'T-Bar Row','Diverging Lat Pulldown Machine','Alternating Dumbbell Curl'] },
  legs:      { label:'Legs', muscles:['quads','hamstrings','glutes','calves'],
               exercises:['Barbell Squat','Leg Press','Lying leg press machine','Bulgarian Split Squat',
                          'Leg Extension','Leg Curl','Romanian deadlift','Hip thrust',
                          'Standing Calf Raise','Seated Calf Raise','Smith machine RDL',
                          'Deadlift','Barbell Deadlift','Hamstring curl','Dumbbell RDL',
                          'Single Leg Curl','Glute master','Cable abductors','Cable kickbacks',
                          'Jump Squats','Sissy Squat'] },
  upper:     { label:'Upper Body', muscles:['chest','back','shoulders','biceps','triceps'],
               exercises:['Barbell Bench Press','Barbell Row','Machine Shoulder Press',
                          'Weighted Pull-Ups','Cable row','Dumbbell Hammer Curl','Tricep Rope Pushdown',
                          'Cable Lateral Raise','Incline Dumbbell Bench Press','V-Grip Cable row'] },
  lower:     { label:'Lower Body', muscles:['quads','hamstrings','glutes','calves'],
               exercises:['Leg Press','Deadlift','Hip thrust','Leg Extension','Leg Curl',
                          'Standing Calf Raise','Seated Calf Raise','Bulgarian Split Squat',
                          'Romanian deadlift','Smith machine RDL'] },
  chest:     { label:'Chest', muscles:['chest'],
               exercises:['Barbell Bench Press','Incline Dumbbell Bench Press','Decline Bench Press',
                          'Bench Press (Dumbell)','Dumbbell bench flyes','Cable Flyes (Chest Height)',
                          'Machine Press (weight loaded)','Guillotine Dumbbell Bench Press',
                          'Body weight dips (on dip bars)','Close Grip Bench Press'] },
  back:      { label:'Back', muscles:['back'],
               exercises:['Barbell Deadlift','Barbell Row','V-Grip Cable row','Lat Pulldown (Wide Grip)',
                          'Seated Cable row','T-Bar Row','Smith Machine Barbell Row',
                          'Loaded Machine Row (Single Arm)','Weighted Pull-Ups','Lat Rope Pushdown',
                          'Diverging Lat Pulldown Machine','Cable Face Pull (High)','Landmine rows'] },
  shoulders: { label:'Shoulders', muscles:['shoulders'],
               exercises:['Machine Shoulder Press','Seated Dumbbell Shoulder Press','Bradford Press',
                          'Cable Lateral Raise','Standing Dumbbell Lateral Raise','Rear Delt Flyes (Dumbbell)',
                          'Cable Face Pull (High)','Arnie Press','Plate Raise',
                          'Dumbbell front raises','Seated Lateral Raise (Dumbbell)'] },
  arms:      { label:'Arms', muscles:['biceps','triceps'],
               exercises:['Cable Curl','Preacher Curl','Dumbbell Hammer Curl','Alternating Dumbbell Curl',
                          'Incline Bench Dumbbell Hammer Curl','Tricep Rope Pushdown',
                          'Rope Overhead Extension','Seated e-z Bar Tricep Extension',
                          'Rope Hammer Curl','Cable Hammer Curl','Dumbbell Spider Curl',
                          'Reverse Grip Cable Curl','Single Arm Cable Curl'] },
  glutes:    { label:'Glutes', muscles:['glutes','hamstrings'],
               exercises:['Hip thrust','Glute master','Cable abductors','Cable kickbacks',
                          'Romanian deadlift','Smith machine RDL','Bulgarian Split Squat',
                          'Dumbbell RDL','Single Leg Deadlift','Cable Pull Through'] },
  cardio:    { label:'Cardio', muscles:[],
               exercises:['Running','Cycling','Rowing','HIIT sprint','Jump rope',
                          'Elliptical','Stair climber','Air bike','Ski erg'] },
  fullbody:  { label:'Full Body', muscles:['chest','back','shoulders','quads','hamstrings'],
               exercises:['Barbell Bench Press','Deadlift','Barbell Row','Overhead press',
                          'Squat','Pull-up','Hip thrust','Leg Press','Cable row','Dips'] },
};

// Keywords → context key
const NAME_KEYWORDS = [
  { keys:['push','pressing','chest day','pec','bench day'], ctx:'push' },
  { keys:['pull','pulling','back day','row day','lat day','deadlift day'], ctx:'pull' },
  { keys:['leg','lower','quad','hamstring','glute','squat day','booty','hams'], ctx:'legs' },
  { keys:['upper','upper body','upperbody'], ctx:'upper' },
  { keys:['lower body','lowerbody'], ctx:'lower' },
  { keys:['chest','pec','bench','flat','incline','decline'], ctx:'chest' },
  { keys:['back','lat','lats','row'], ctx:'back' },
  { keys:['shoulder','delt','ohp','overhead','press day'], ctx:'shoulders' },
  { keys:['arm','bicep','tricep','curl day','bis','tris'], ctx:'arms' },
  { keys:['glute','booty','hip','butt','posterior'], ctx:'glutes' },
  { keys:['cardio','run','bike','conditioning'], ctx:'cardio' },
  { keys:['full body','fullbody','total body','all body'], ctx:'fullbody' },
];

function detectSessionContext(name){
  if(!name) return null;
  const lower = name.toLowerCase();
  for(const entry of NAME_KEYWORDS){
    if(entry.keys.some(k => lower.includes(k))) return SESSION_CONTEXTS[entry.ctx];
  }
  return null;
}

function getSuggestedExercises(context, type){
  if(!context) return [];
  // Filter context exercises to the currently selected type tab
  // by cross-referencing MUSCLE_MAP and EXERCISES
  const all = allExercises(type);
  const allTypes = allExercises('strength').concat(allExercises('bodyweight')).concat(allExercises('cardio'));
  return context.exercises.filter(e => all.includes(e) || allTypes.includes(e) === false).slice(0, 8);
}

// ═══ MODAL ENGINE ═══
// All dialogs use the modal layer — no browser confirm()
const ML = document.getElementById('modal-layer');

// Callback registry — avoids toString() scope loss
let _confirmCb = null;
function showConfirm(msg, sub, okLabel, okClass, onOk){
  _confirmCb = onOk;
  ML.innerHTML=`
    <div class="modal-bg open" id="conf-bg">
      <div class="modal" style="max-height:none;padding-bottom:20px;">
        <div class="modal-handle"></div>
        <div class="confirm-msg">${msg}</div>
        ${sub?`<div class="confirm-sub">${sub}</div>`:''}
        <div class="flex gap-8">
          <button class="btn flex-1" onclick="closeConfirm()">Cancel</button>
          <button class="btn ${okClass||'btn-danger'} flex-1" onclick="runConfirm()">${okLabel||'Confirm'}</button>
        </div>
      </div>
    </div>`;
}
function runConfirm(){
  const cb = _confirmCb;
  _confirmCb = null;
  closeConfirm();
  if(cb) cb();
}
function closeConfirm(){const el=document.getElementById('conf-bg');if(el)el.remove();}
function closeModalAnimated(id){
  const bg=document.getElementById(id);
  if(!bg)return;
  bg.classList.add('closing');
  setTimeout(()=>{if(bg.parentNode)bg.remove();},200);
}


function closeModalAnim(id){
  const el=document.getElementById(id);
  if(!el)return;
  const modal=el.querySelector('.modal');
  if(modal){modal.classList.add('modal-closing');setTimeout(()=>el.remove(),160);}
  else el.remove();
}
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function closeModalBg(el){
  // el is the .modal-bg element; animate .modal then remove
  const modal=el.querySelector('.modal');
  if(modal){modal.classList.add('modal-closing');setTimeout(()=>el.remove(),160);}
  else el.remove();
}

// ═══ NAVIGATION ═══
function nav(screen){
  currentScreen=screen;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.screen===screen));
  render();
}

// ═══ RENDER ROUTER ═══
function render(){
  if(!currentUser)return;
  const main=document.getElementById('main');
  const topR=document.getElementById('topbar-right');
  main.innerHTML='';
  topR.innerHTML='';
  const meta=USERS_META[currentUser]||{};
  const logo=document.getElementById('logo-area');
  if(logo)logo.innerHTML=`Lift<span style="color:var(--accent2)">Log</span> <span style="font-size:11px;font-weight:500;padding:2px 8px;border-radius:100px;background:${meta.bg};color:${meta.color};margin-left:4px;vertical-align:middle;cursor:pointer" onclick="switchUser()">${currentUser} ↩</span>`;
  if(currentScreen==='home')renderHome(main,topR);
  else if(currentScreen==='log')renderLog(main,topR);
  else if(currentScreen==='history')renderHistory(main,topR);
  else if(currentScreen==='progress')renderProgress(main,topR);
}

// ════════════════════════════════════════════
// HOME SCREEN
// ════════════════════════════════════════════
function renderHome(el,topR){
  const thisWeek=getThisWeekWorkouts();
  const totalVol=thisWeek.reduce((s,w)=>s+calcVolume(w),0);
  const streak=calcStreak();
  const prs=countRecentPRs(7);

  // Unit + settings in topbar
  topR.innerHTML=`<div style="display:flex;gap:4px;align-items:center">
    <button onclick="setUnit('kg')" class="btn btn-xs" style="border-color:${getUnit()==='kg'?'var(--accent)':'var(--border)'};background:${getUnit()==='kg'?'var(--accent-bg)':'none'};color:${getUnit()==='kg'?'var(--accent2)':'var(--text2)'}">kg</button>
    <button onclick="setUnit('lbs')" class="btn btn-xs" style="border-color:${getUnit()==='lbs'?'var(--accent)':'var(--border)'};background:${getUnit()==='lbs'?'var(--accent-bg)':'none'};color:${getUnit()==='lbs'?'var(--accent2)':'var(--text2)'}">lbs</button>
  </div>`;

  let html='<div class="fadeIn">';

  // ── HERO: active workout or start ──
  if(activeWorkout){
    const elapsed=Math.floor((Date.now()-activeWorkout.startTime)/1000);
    html+=`<div style="background:linear-gradient(135deg,rgba(124,109,250,.15),rgba(124,109,250,.05));border:1px solid rgba(124,109,250,.3);border-radius:var(--r2);padding:20px 16px;margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div style="font-size:11px;font-weight:600;color:var(--accent2);letter-spacing:.8px;text-transform:uppercase;margin-bottom:4px">Active workout</div>
          <div style="font-size:20px;font-weight:700;letter-spacing:-.3px">${esc(activeWorkout.name||'Untitled')}</div>
        </div>
        <div style="text-align:right">
          <div class="timer-display" id="hw-elapsed" style="font-size:24px">${formatDuration(elapsed)}</div>
          <div class="text-xs text-muted">${countSets(activeWorkout)} sets logged</div>
        </div>
      </div>
      <button class="btn btn-primary w-full" style="font-size:15px;padding:12px" onclick="nav('log')">Continue →</button>
    </div>`;
  } else {
    html+=`<div style="margin-bottom:16px">
      <button class="btn btn-primary w-full" style="font-size:16px;font-weight:700;padding:16px;border-radius:var(--r2)" onclick="startNewWorkout()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Start workout
      </button>
    </div>`;
  }

  // ── COMPACT STATS ROW ──
  html+=`<div style="display:flex;gap:8px;margin-bottom:16px">
    <div style="flex:1;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;text-align:center">
      <div style="font-size:20px;font-weight:700;font-family:var(--mono);line-height:1">${thisWeek.length}</div>
      <div style="font-size:10px;color:var(--text3);letter-spacing:.4px;margin-top:2px">THIS WEEK</div>
    </div>
    <div style="flex:1;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;text-align:center">
      <div style="font-size:20px;font-weight:700;font-family:var(--mono);line-height:1">${streak}</div>
      <div style="font-size:10px;color:var(--text3);letter-spacing:.4px;margin-top:2px">STREAK 🔥</div>
    </div>
    <div style="flex:1;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;text-align:center">
      <div style="font-size:20px;font-weight:700;font-family:var(--mono);line-height:1;color:var(--green)">${prs}</div>
      <div style="font-size:10px;color:var(--text3);letter-spacing:.4px;margin-top:2px">PRs / WEEK</div>
    </div>
    <div style="flex:1;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;text-align:center">
      <div style="font-size:20px;font-weight:700;font-family:var(--mono);line-height:1">${fmtVol(totalVol)}</div>
      <div style="font-size:10px;color:var(--text3);letter-spacing:.4px;margin-top:2px">VOL ${wUnit()}</div>
    </div>
  </div>`;

  // ── TEMPLATES (compact horizontal scroll) ──
  if(templates.length>0){
    html+='<div class="card-title" style="margin-bottom:8px;">Templates</div>';
    html+='<div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none;margin-bottom:16px">';
    templates.forEach((t,i)=>{
      html+=`<div style="flex-shrink:0;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:10px 14px;cursor:pointer;min-width:140px;transition:border-color .15s" onclick="startFromTemplate(${i})" onmouseenter="this.style.borderColor='var(--accent)'" onmouseleave="this.style.borderColor='var(--border)'">
        <div style="font-weight:600;font-size:13px;margin-bottom:3px">${esc(t.name)}</div>
        <div style="font-size:11px;color:var(--text3)">${t.exercises.length} exercises</div>
      </div>`;
    });
    html+='</div>';
  }

  // ── COACH FEED (collapsible) ──
  if(workouts.length >= 3){
    const nextRec = getNextSessionRecommendation();
    const flags = getFatigueFlags();
    const split = analyzeSplit();
    const plateaus = detectPlateaus();
    const hasCoachData = nextRec || flags.length || split || plateaus.length;

    if(hasCoachData){
      const coachOpen = DB.get('coach_feed_open_'+currentUser, true);
      html+=`<div style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;cursor:pointer" onclick="toggleCoachFeed()">
          <div class="card-title" style="margin-bottom:0">Coach feed</div>
          <svg id="coach-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" stroke-width="2" style="transform:rotate(${coachOpen?'0':'180'}deg);transition:transform .2s"><polyline points="18 15 12 9 6 15"/></svg>
        </div>
        <div id="coach-feed-body" style="display:${coachOpen?'block':'none'}">`;

      // Weekly debrief
      html += renderWeeklyDebrief();

      // Next session
      if(nextRec && !activeWorkout){
        html += `<div class="next-session mb-12">
          <div class="flex-between mb-8">
            <div class="next-session-header" style="margin-bottom:0">Today: <strong>${esc(nextRec.sessionLabel)}</strong></div>
            <button class="btn btn-sm btn-primary" onclick="startQuickSession()">Quick start →</button>
          </div>
          <div class="next-muscle-list">${nextRec.candidates.map(m=>`<span class="next-muscle-tag">${m}</span>`).join('')}</div>
          <div class="text-xs text-muted mt-4">${nextRec.candidates.map(m=>{const v=(getMuscleVolumeLast4Weeks()[m]||0);return `${m}: ${nextRec.daysRest}d rest · ${v} sets`;}).join(' &nbsp;·&nbsp; ')}</div>
          ${nextRec.suggestedExercises.length?`<div class="text-xs text-muted mt-4">Suggested: ${nextRec.suggestedExercises.map(e=>esc(e)).join(' · ')}</div>`:''}
        </div>`;
      }

      // Flags + plateaus
      const allFlags=[
        ...(split&&split.neglected.length?[{type:'warn',text:`<strong>Neglected:</strong> ${split.neglected.join(', ')} — under 4 sets last 4 weeks.`}]:[]),
        ...(split?[{type:'info',text:esc(split.balance)}]:[]),
        ...flags,
        ...plateaus.map(p=>({type:'warn',text:`<strong>${esc(p.name)}</strong> — ${p.sessions} sessions without progress. <span style="color:var(--green)">Try: ${esc(p.fix)}</span>`}))
      ];
      if(allFlags.length){
        html+=`<div class="coach-panel mb-12">
          <div class="coach-panel-title">Flags${split?`<span class="split-badge">${esc(split.splitName)}</span>`:''}</div>
          ${allFlags.map(f=>`<div class="flag-row"><div class="flag-dot ${f.type}"></div><div class="flag-text">${f.text}</div></div>`).join('')}
        </div>`;
      }

      html+=`</div></div>`;  // close coach-feed-body + wrapper
    }
  }

  // ── BUILD MY PLAN ──
  html += `<button class="btn w-full mb-16" style="border-color:rgba(124,109,250,.35);background:rgba(124,109,250,.06);color:var(--accent2)" onclick="openSplitModal()">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    Build my 4-week training plan
  </button>`;

  // ── RECENT ──
  if(workouts.length>0){
    html+='<div class="card-title" style="margin-bottom:8px;">Recent</div>';
    workouts.slice(-3).reverse().forEach((w,i)=>{
      const idx=workouts.length-1-i;
      html+=renderWorkoutCard(w,true,idx);
    });
  } else if(!activeWorkout){
    html+=`<div class="empty-state">
      <div class="empty-state-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text2)" stroke-width="1.5"><path d="M6 5v14M18 5v14M4 7h4M16 7h4M4 17h4M16 17h4"/></svg></div>
      <div class="empty-state-title">No workouts yet</div>
      <div class="empty-state-sub">Tap <strong>Start workout</strong> above to log your first session. Your stats and coaching will appear here as you train.</div>
    </div>`;
  }

  html+='</div>';
  el.innerHTML=html;

  if(activeWorkout){
    const iv=setInterval(()=>{
      const e=document.getElementById('hw-elapsed');
      if(!e){clearInterval(iv);return;}
      e.textContent=formatDuration(Math.floor((Date.now()-activeWorkout.startTime)/1000));
    },1000);
  }
}

function toggleCoachFeed(){
  const body=document.getElementById('coach-feed-body');
  const chev=document.getElementById('coach-chevron');
  if(!body)return;
  const open=body.style.display==='none';
  body.style.display=open?'block':'none';
  if(chev)chev.style.transform=open?'rotate(0deg)':'rotate(180deg)';
  DB.set('coach_feed_open_'+currentUser,open);
}


// ════════════════════════════════════════════
// LOG SCREEN
// ════════════════════════════════════════════
function renderLog(el,topR){
  // Support editing past workouts
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;

  if(!wo){
    el.innerHTML=`<div class="fadeIn">
      <div class="empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><p>No active workout.<br>Start one from the Home tab.</p></div>
      <button class="btn btn-primary w-full mt-12" onclick="startNewWorkout()">Start workout</button>
    </div>`;
    return;
  }

  const isEditing=!!editingWorkout;

  topR.innerHTML=`<div class="flex gap-8 flex-center">
    ${isEditing?
      `<button class="btn btn-sm btn-success" onclick="saveEditedWorkout()">Save changes</button>` :
      `<button class="btn btn-sm btn-ghost" onclick="openTemplateModal()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Save
      </button>
      <button class="btn btn-sm btn-primary" onclick="openFinishModal()">Finish</button>`
    }
  </div>`;

  const elapsed=isEditing?wo.duration||0:Math.floor((Date.now()-wo.startTime)/1000);

  let html=`<div class="fadeIn">`;

  if(isEditing){
    html+=`<div class="edit-mode-banner">
      <span>✎ Editing: ${esc(wo.name||'Workout')}</span>
      <button class="btn btn-xs btn-ghost" onclick="cancelEdit()">Discard changes</button>
    </div>`;
  }

  html+=`<div class="workout-header">
    <div class="flex-between">
      <input type="text" id="workout-name-input" value="${esc(wo.name||'')}" placeholder="Workout name…"
        class="workout-name-input-large"
        oninput="${isEditing?'editingWorkout.workout':'activeWorkout'}.name=this.value">
      <div class="flex gap-8 flex-center">
        ${isEditing?'':`<div class="timer-display" id="log-elapsed">${formatDuration(elapsed)}</div>`}
        <div style="display:flex;gap:4px">
          <button onclick="setUnit('kg')" class="btn-xs btn" style="border-color:${getUnit()==='kg'?'var(--accent)':'var(--border)'};background:${getUnit()==='kg'?'var(--accent-bg)':'none'};color:${getUnit()==='kg'?'var(--accent2)':'var(--text3)'};padding:2px 6px;font-size:10px">kg</button>
          <button onclick="setUnit('lbs')" class="btn-xs btn" style="border-color:${getUnit()==='lbs'?'var(--accent)':'var(--border)'};background:${getUnit()==='lbs'?'var(--accent-bg)':'none'};color:${getUnit()==='lbs'?'var(--accent2)':'var(--text3)'};padding:2px 6px;font-size:10px">lbs</button>
        </div>
      </div>
    </div>
  </div>`;

  // Rest timer (only during live session)
  if(!isEditing){
    if(!swExpanded){
      html+=`<div class="sw-collapsed" onclick="swExpanded=true;renderLog(document.getElementById('main'),document.getElementById('topbar-right'))">
        <div style="display:flex;align-items:center;gap:8px">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span style="font-size:11px;color:var(--text3)">Rest timer</span>
        </div>
        <div class="sw-collapsed-display${swRunning?' running':''}" id="sw-display-mini">${swFmt(swMs)}</div>
        <div style="display:flex;gap:6px;align-items:center">
          <button class="sw-btn sw-start" style="width:32px;height:32px" id="sw-toggle-mini" onclick="event.stopPropagation();swToggle();updateSwMini()">
            <svg id="sw-play-mini" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="display:${swRunning?'none':'block'}"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <svg id="sw-pause-mini" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="display:${swRunning?'block':'none'}"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          </button>
          <button class="sw-btn sw-reset" style="width:32px;height:32px" onclick="event.stopPropagation();swReset();updateSwMini()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>
          </button>
        </div>
      </div>`;
    } else {
      html+=`<div class="sw-expanded">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:11px;color:var(--text3);font-weight:600;letter-spacing:.5px">REST TIMER</span>
          <button class="btn-ghost" style="font-size:11px;padding:2px 8px" onclick="swExpanded=false;renderLog(document.getElementById('main'),document.getElementById('topbar-right'))">Collapse</button>
        </div>
        <div class="stopwatch" id="sw-bar">
          <button class="sw-btn sw-reset" onclick="swReset()" title="Reset">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>
          </button>
          <div class="sw-display stopped" id="sw-display">0:00.0</div>
          <button class="sw-btn sw-start" id="sw-toggle-btn" onclick="swToggle()" title="Start">
            <svg id="sw-play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <svg id="sw-pause-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          </button>
          <button class="sw-btn sw-stop" onclick="swLap()" title="Lap" style="width:36px;height:36px;border-radius:8px;font-size:10px;font-weight:600;font-family:var(--mono)">LAP</button>
        </div>
        <div class="sw-laps" id="sw-laps-bar">
          <div style="font-size:10px;color:var(--text3);letter-spacing:.5px;font-weight:600">LAPS</div>
          <div class="sw-lap-list" id="sw-lap-list"></div>
        </div>
      </div>`;
    }
  }

  // AI suggestion panel
  html+=renderAISuggestions(wo);

  // Exercises
  wo.exercises.forEach((ex,ei)=>{ html+=renderExerciseBlock(ex,ei,isEditing); });

  html+=`<button class="btn w-full mt-8" onclick="openExModal()">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    Add exercise
  </button>`;

  if(!isEditing){
    html+=`<button class="btn btn-danger w-full mt-8" onclick="confirmDiscardWorkout()">Discard workout</button>`;
  }

  html+='</div>';
  el.innerHTML=html;

  // Start live timer
  if(!isEditing){
    if(!timerInterval){
      timerInterval=setInterval(()=>{
        const t=document.getElementById('log-elapsed');
        if(t)t.textContent=formatDuration(Math.floor((Date.now()-activeWorkout.startTime)/1000));
      },1000);
    }
    // Auto-expand stopwatch if running or has laps
    if(swRunning||swLaps.length) swExpanded=true;
    // Restore stopwatch display state after re-render
    swRefreshDisplay();
    swRefreshLaps();
    // Keep mini display in sync
    const mini=document.getElementById('sw-display-mini');
    if(mini) mini.textContent=swFmt(swMs);
  }
}

// AI suggestions (lightweight in-app heuristic, no API needed by default)
function renderAISuggestions(wo){
  if(!wo.exercises.length)return'';
  const suggestions=getWeightSuggestions(wo);
  if(!suggestions.length)return'';
  return `<div class="ai-panel mb-12">
    <div class="flex-between"><div style="font-size:12px;font-weight:600;color:var(--accent2)">⚡ Suggestions</div></div>
    ${suggestions.map(s=>`<div class="ai-bubble">${s}</div>`).join('')}
  </div>`;
}

function getWeightSuggestions(wo){
  const sug=[];
  wo.exercises.forEach(ex=>{
    if(ex.type==='cardio')return;
    const hist=getExerciseHistory(ex.name);
    if(hist.length<2)return;
    const last=hist[hist.length-1];
    const prev=hist[hist.length-2];

    // Find the top set from last session (highest weight, with rep count)
    const lastSets=last.sets.filter(s=>s.reps&&s.weight);
    const prevSets=prev.sets.filter(s=>s.reps&&s.weight);
    if(!lastSets.length)return;

    // Best set = highest weight. Tie-break by most reps.
    const lastBest=lastSets.reduce((best,s)=>{
      const w=parseFloat(s.weight)||0,r=parseFloat(s.reps)||0;
      if(!best||w>best.w||(w===best.w&&r>best.r))return{w,r,rpe:s.rpe};
      return best;
    },{w:0,r:0});
    const prevBest=prevSets.reduce((best,s)=>{
      const w=parseFloat(s.weight)||0;
      return(!best||w>best.w)?{w}:best;
    },{w:0});

    if(!lastBest.w)return;

    const trend=lastBest.w>=prevBest.w?'progressive':'deload';
    // Only suggest a bump if RPE wasn't max effort
    const rpeScore={easy:1,moderate:2,challenging:3,max_effort:4}[lastBest.rpe]||0;
    const canBump=rpeScore<=3||rpeScore===0;
    const bump=canBump?(lastBest.w>50?2.5:1.25):0;
    const targetW=trend==='progressive'?lastBest.w+bump:lastBest.w;
    const rpeNote=lastBest.rpe?` at ${lastBest.rpe.replace('max_effort','max effort').replace('_',' ')}`:'';

    sug.push(`<strong>${esc(ex.name)}</strong> — last: <strong>${fmtW(lastBest.w)} ${wUnit()} × ${lastBest.r}</strong>${rpeNote}. Target today: <strong>${fmtW(targetW)} ${wUnit()} × ${lastBest.r}</strong>${!canBump?' (consolidate before going heavier)':bump>0?` (+${fmtW(bump)} ${wUnit()})`: ''}.`);
  });
  return sug.slice(0,2);
}

function renderExerciseBlock(ex,ei,isEditing){
  const pr=getExercisePR(ex.name);
  const isSS=ex.supersetId;
  let html=`<div class="exercise-block${isSS?' superset-group':''}" id="exblock-${ei}">`;
  if(isSS){
    html+=`<div class="ss-indicator"><div class="ss-line"></div><div class="ss-label">Superset</div></div>`;
  }
  // Last session data for this exercise
  const exHist=getExerciseHistory(ex.name);
  const lastSession=exHist.length?exHist[exHist.length-1]:null;
  let lastTimeStr='';
  if(lastSession){
    const lastSets=lastSession.sets.filter(s=>s.reps&&s.weight);
    if(lastSets.length){
      const maxW=Math.max(...lastSets.map(s=>parseFloat(s.weight)||0));
      const atMax=lastSets.filter(s=>parseFloat(s.weight)===maxW);
      const repStr=atMax.map(s=>s.reps).join('/');
      lastTimeStr=`Last: <strong>${fmtW(maxW)} ${wUnit()} × ${repStr}</strong>`;
    } else if(lastSession.sets.filter(s=>s.reps).length){
      const r=lastSession.sets.filter(s=>s.reps).map(s=>s.reps).join('/');
      lastTimeStr=`Last: <strong>${r} reps</strong>`;
    }
  }
  const exBlockStatsOpen=openExBlockStats.has(ei);
  html+=`<div class="ex-header">
    <div style="flex:1;min-width:0">
      <div class="ex-name-row">
        <span class="ex-name-text">${esc(ex.name)}</span>
        <span class="tag tag-${ex.type}" style="font-size:10px;flex-shrink:0">${ex.type}</span>
        ${ex.supersetId?`<span class="superset-badge">SS</span>`:''}
      </div>
      ${lastTimeStr?`<div class="ex-subtitle">${lastTimeStr}</div>`:''}
    </div>
    <div style="display:flex;gap:6px;align-items:flex-start;flex-shrink:0">
      <button class="ex-info-btn${exBlockStatsOpen?' active':''}" onclick="toggleExBlockStats(${ei})" title="Exercise stats">ⓘ</button>
      <button class="btn-ghost btn-icon" onclick="removeExercise(${ei})">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
      </button>
    </div>
  </div>
  ${exBlockStatsOpen?renderExBlockStatsPanel(ex.name,ei):''}`;

  // Column headers
  if(ex.type==='strength')    html+=`<div class="col-labels strength"><span></span><span>Reps</span><span>Weight (${wUnit()})</span><span>RPE</span><span></span></div>`;
  else if(ex.type==='bodyweight') html+=`<div class="col-labels bodyweight"><span></span><span>Reps</span><span>+Wt (${wUnit()})</span><span>RPE</span><span></span></div>`;
  else html+=`<div class="col-labels cardio"><span></span><span>Dist (km)</span><span>Time (min)</span><span>RPE</span><span></span></div>`;

  ex.sets.forEach((s,si)=>{ html+=renderSetRow(ex,ei,si,s); });

  html+=`<div class="flex gap-8 mt-8">
    <button class="btn btn-sm flex-1" onclick="addSet(${ei})">+ Set</button>
    ${ex.type!=='cardio'?`<button class="btn btn-sm" onclick="addSuperset(${ei})" title="Add superset">⇌ Superset</button>`:''}
  </div></div>`;
  return html;
}

function renderSetRow(ex,ei,si,s){
  const done=s.done?'completed':'';
  const type=ex.type;
  const isDropset=s.notes&&s.notes.includes('[DROPSET]');
  const userNote=s.notes?s.notes.replace(/\[SUPERSET:[^\]]+\]/g,'').replace(/\[DROPSET\]/g,'').trim():'';
  const hasNote=!!userNote;
  const noteId=`setnote-${ei}-${si}`;
  const rpeClass='rpe-'+(s.rpe||'none');

  let weightInput,distInput,durInput;
  const wv=s.weight?fmtW(s.weight):'';

  if(type==='cardio'){
    distInput=`<input type="number" class="set-input" min="0" step="0.1" placeholder="—" value="${s.dist||''}" oninput="updateSet(${ei},${si},'dist',this.value)">`;
    durInput=`<input type="number" class="set-input" min="0" step="0.5" placeholder="—" value="${s.duration||''}" oninput="updateSet(${ei},${si},'duration',this.value)">`;
  } else {
    weightInput=`<input type="number" class="set-input" min="0" step="0.5" placeholder="—" value="${wv}"
      id="wi-${ei}-${si}"
      oninput="updateSet(${ei},${si},'weight_disp',this.value);checkLivePR(${ei},${si})"
      onfocus="checkLivePR(${ei},${si})">`;
  }

  const repsInput=`<input type="number" class="set-input" min="0" placeholder="—" value="${s.reps||''}"
    id="ri-${ei}-${si}"
    oninput="updateSet(${ei},${si},'reps',this.value);checkLivePR(${ei},${si})"
    onfocus="checkLivePR(${ei},${si})"
    ondblclick="showSetActions(${ei},${si})">`;

  // RPE as native select — one tap shows all options, OS handles the picker UI
  const rpeSelect=`<select id="rpesel-${ei}-${si}" class="rpe-select ${rpeClass}"
    onchange="setRPE(${ei},${si},this.value)">
    <option value="">—</option>
    <option value="easy"${s.rpe==='easy'?' selected':''}>Easy</option>
    <option value="moderate"${s.rpe==='moderate'?' selected':''}>Mod</option>
    <option value="challenging"${s.rpe==='challenging'?' selected':''}>Hard</option>
    <option value="max_effort"${s.rpe==='max_effort'?' selected':''}>Max</option>
  </select>`;

  const noteBtn=`<button class="set-note-btn${hasNote?' has-note':''}" id="notebtn-${ei}-${si}"
    onclick="toggleSetNote(${ei},${si})" title="${hasNote?'Edit note':'Add note'}">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
  </button>`;

  const dropBtn=`<button class="dropset-btn${isDropset?' active':''}" id="dropbtn-${ei}-${si}"
    onclick="toggleDropset(${ei},${si})">D</button>`;

  const noteWrap=`<div class="set-note-wrap" id="${noteId}" style="display:${hasNote?'block':'none'}">
    <textarea class="set-note-input w-full" rows="1" placeholder="Note this set…"
      oninput="updateSetNote(${ei},${si},this.value);autoResizeNote(this)"
      onfocus="autoResizeNote(this)">${esc(userNote)}</textarea>
  </div>`;

  let row;
  if(type==='cardio'){
    row=`<div class="set-row cardio ${done}" id="setrow-${ei}-${si}" style="position:relative">
      <span class="set-num">${si+1}${isDropset?'<span class="dropset-badge">D</span>':''}</span>
      ${distInput}${durInput}${rpeSelect}
      <button class="set-del" onclick="removeSet(${ei},${si})"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>${noteWrap}`;
  } else {
    row=`<div class="set-row strength ${done}" id="setrow-${ei}-${si}" style="position:relative">
      <span class="set-num" style="position:relative">
        ${si+1}<span id="dropbadge-${ei}-${si}" class="dropset-badge" style="font-size:8px;display:${isDropset?'inline':'none'}">D</span>
        <span id="prflash-${ei}-${si}" class="pr-flash-inline" style="display:none">🏆 PR!</span>
      </span>
      ${repsInput}${weightInput}${rpeSelect}
      <div class="set-check" onclick="toggleSetDone(${ei},${si})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:${s.done?'block':'none'}"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    </div>
    <div class="set-extras-toggle">
      <button class="set-more-btn${isDropset||hasNote?' has-data':''}" 
        onclick="toggleSetExtras(${ei},${si})" id="setmore-${ei}-${si}"
        title="${isDropset?'Dropset active · ':''} ${hasNote?'Note: '+userNote:''} Tap for options">
        ${isDropset?'D · ':''} ${hasNote?'✎ · ':''}···
      </button>
    </div>
    <div id="setextras-${ei}-${si}" style="display:${isDropset||hasNote?'block':'none'}">
      <div style="display:flex;gap:6px;align-items:center;margin:-2px 0 4px">
        ${dropBtn}${noteBtn}
      </div>
      ${noteWrap}
    </div>`;
  }
  return row;
}

// ════════════════════════════════════════════
// HISTORY SCREEN
// ════════════════════════════════════════════
function renderHistory(el,topR){
  let html='<div class="fadeIn">';

  if(templates.length>0){
    html+='<div class="card-title" style="margin-bottom:8px;">Templates</div>';
    templates.forEach((t,i)=>{
      html+=`<div class="template-card">
        <div class="flex-between">
          <div>
            <div style="font-weight:600;font-size:14px;">${esc(t.name)}</div>
            <div class="text-xs text-muted mt-4">${t.exercises.map(e=>esc(e.name)).join(' · ')}</div>
          </div>
          <div class="flex gap-8">
            <button class="btn btn-sm" onclick="startFromTemplate(${i})">Use</button>
            <button class="btn btn-sm btn-ghost" onclick="confirmDeleteTemplate(${i})">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            </button>
          </div>
        </div>
      </div>`;
    });
    html+='<hr class="divider">';
  }

  html+=`<div class="history-search-wrap">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input type="text" placeholder="Search workouts, exercises…" value="${esc(historySearch)}"
      oninput="historySearch=this.value;renderHistory(document.getElementById('main'),document.getElementById('topbar-right'))">
  </div>
  <div class="history-filter-row">
    ${['All','This week','This month','PRs'].map(f=>`<button class="history-filter-chip${historyFilter===f?' active':''}" onclick="historyFilter='${f}';renderHistory(document.getElementById('main'),document.getElementById('topbar-right'))">${f}</button>`).join('')}
  </div>`;

  const filtered=filterWorkouts(workouts,historySearch,historyFilter);
  html+='<div class="card-title" style="margin-bottom:8px;">'+
    (historySearch||historyFilter?`${filtered.length} result${filtered.length!==1?'s':''}`:
    'All workouts')+'</div>';
  if(!filtered.length){
    html+=`<div class="empty-state">
      <div class="empty-state-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" stroke-width="2"><polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 1 0 .5-4.5"/><polyline points="3 3 3 9 9 9"/></svg></div>
      <div class="empty-state-title">${workouts.length?'No matching workouts':'No workouts yet'}</div>
      <div class="empty-state-sub">${workouts.length?'Try a different search or filter.':'Your workout history will build here session by session.'}</div>
    </div>`;
  } else {
    filtered.forEach(({w,ri})=>{ html+=renderWorkoutCard(w,true,ri); });
  }
  html+='</div>';
  el.innerHTML=html;
}

function renderWorkoutCard(w,expandable,idx){
  const vol=calcVolume(w);
  const sets=countSets(w);
  const date=new Date(w.date);
  const dateStr=date.toLocaleDateString('en-CA',{weekday:'short',month:'short',day:'numeric'});
  const id='wcard-'+(idx!==undefined?idx:w.date);
  let html=`<div class="history-entry" id="${id}" onclick="toggleHistory('${id}')">
    <div class="flex-between">
      <div>
        <div style="font-weight:600;font-size:14px;">${esc(w.name||'Workout')} ${w.prs&&w.prs.length?'<span class="pr-badge">PR</span>':''}</div>
        <div class="text-xs text-muted">${dateStr} · ${formatDuration(estimateDuration(w))}</div>
      </div>
      <div style="text-align:right">
        <div class="mono text-sm" style="font-weight:500">${fmtVol(vol)} ${wUnit()}</div>
        <div class="text-xs text-muted">${sets} sets</div>
      </div>
    </div>
    <div class="flex gap-8 mt-8" style="flex-wrap:wrap">
      ${w.exercises.slice(0,4).map(e=>`<span class="tag tag-${e.type}">${esc(e.name)}</span>`).join('')}
      ${w.exercises.length>4?`<span class="tag" style="background:var(--bg3);color:var(--text2)">+${w.exercises.length-4}</span>`:''}
    </div>
    <div class="history-detail">
      ${renderWorkoutDetail(w,idx)}
    </div>
  </div>`;
  return html;
}

function renderWorkoutDetail(w,idx){
  // Group exercises by supersetId so we can render them together
  const groups=[];
  const seen=new Set();
  w.exercises.forEach((ex,i)=>{
    if(seen.has(i))return;
    if(ex.supersetId){
      // Collect all exercises in this superset
      const members=w.exercises.map((e,j)=>({e,j})).filter(({e,j})=>e.supersetId===ex.supersetId&&!seen.has(j));
      members.forEach(({j})=>seen.add(j));
      groups.push({type:'superset',exercises:members.map(({e})=>e)});
    } else {
      seen.add(i);
      groups.push({type:'single',exercise:ex});
    }
  });

  let html='';
  groups.forEach(group=>{
    if(group.type==='superset'){
      html+=`<div class="hd-superset-group">
        <div class="hd-superset-label">⇌ Superset</div>
        ${group.exercises.map(ex=>renderHdExercise(ex)).join('')}
      </div>`;
    } else {
      html+=`<div class="hd-exercise">${renderHdExercise(group.exercise)}</div>`;
    }
  });

  if(w.notes){
    html+=`<div class="hd-workout-notes">"${esc(w.notes)}"</div>`;
  }

  if(idx!==undefined){
    html+=`<div class="flex gap-8 mt-12" style="flex-wrap:wrap">
      <button class="btn btn-sm flex-1" onclick="event.stopPropagation();startEditWorkout(${idx})">✎ Edit</button>
      <button class="btn btn-sm" onclick="event.stopPropagation();repeatWorkout(${idx})">Repeat</button>
      <button class="btn btn-sm" onclick="event.stopPropagation();openShareModal(${idx})">↗ Share</button>
      <button class="btn btn-sm btn-danger" onclick="event.stopPropagation();confirmDeleteWorkout(${idx})">Delete</button>
    </div>`;
  }
  return html;
}

function renderHdExercise(ex){
  const rpeLabels={easy:'Easy',moderate:'Mod',challenging:'Hard',max_effort:'Max'};
  let html=`<div class="hd-ex-name">
    <span>${esc(ex.name)}</span>
    <span class="tag tag-${ex.type}" style="font-size:10px">${ex.type}</span>
  </div>
  <div class="hd-sets">`;

  ex.sets.forEach((s,si)=>{
    const isDropset=s.notes&&s.notes.includes('[DROPSET]');
    const userNote=s.notes?s.notes.replace(/\[SUPERSET:[^\]]+\]/g,'').replace(/\[DROPSET\]/g,'').trim():'';
    const rpeClass=s.rpe?'hd-rpe-'+s.rpe:'';
    const rpeLabel=s.rpe?rpeLabels[s.rpe]||s.rpe:'';

    let main='';
    if(ex.type==='cardio'){
      main=`${s.dist||0}km · ${s.duration||0}min`;
    } else if(ex.type==='bodyweight'){
      main=s.reps?(s.weight&&parseFloat(s.weight)>0?`${s.reps} reps +${fmtW(s.weight)}${wUnit()}`:`${s.reps} reps`):'—';
    } else {
      main=s.reps?(s.weight?`${s.reps} × ${fmtW(s.weight)} ${wUnit()}`:`${s.reps} reps`):'—';
    }

    html+=`<div class="hd-set${isDropset?' is-dropset':''}">
      <span class="hd-set-num">${si+1}</span>
      <span class="hd-set-main">${main}</span>
      ${rpeLabel?`<span class="hd-set-rpe ${rpeClass}">${rpeLabel}</span>`:''}
      ${s.done?'<span class="hd-set-done" title="Completed"></span>':'<span class="hd-set-done undone"></span>'}
    </div>`;
    if(userNote){
      html+=`<div class="hd-set-note">↳ ${esc(userNote)}</div>`;
    }
  });

  html+='</div>';
  return html;
}

function toggleHistory(id){
  const el=document.getElementById(id);
  if(el)el.classList.toggle('expanded');
}

// ════════════════════════════════════════════
// PROGRESS SCREEN
// ════════════════════════════════════════════
function renderProgress(el,topR){
  const exList=getExercisesWithHistory();
  let html=`<div class="fadeIn">
    <div class="tabs">
      <button class="tab ${progressTab==='lifts'?'active':''}" onclick="switchProgressTab('lifts')">Lifts</button>
      <button class="tab ${progressTab==='body'?'active':''}" onclick="switchProgressTab('body')">Body</button>
      <button class="tab ${progressTab==='calendar'?'active':''}" onclick="switchProgressTab('calendar')">Calendar</button>
      <button class="tab ${progressTab==='volume'?'active':''}" onclick="switchProgressTab('volume')">Volume</button>
      <button class="tab ${progressTab==='exercise'?'active':''}" onclick="switchProgressTab('exercise')">Exercise</button>
      <button class="tab ${progressTab==='prs'?'active':''}" onclick="switchProgressTab('prs')">PRs</button>
      <button class="tab ${progressTab==='photos'?'active':''}" onclick="switchProgressTab('photos')">Photos</button>
    </div>`;

  if(progressTab==='lifts'){
    html+=renderKeyLifts();
  } else if(progressTab==='body'){
    html+=renderBodyHeatmap();
  } else if(progressTab==='calendar'){
    html+=renderCalendar();
  } else if(progressTab==='volume'){
    html+=`<div class="card mb-12">
      <div class="card-title">Weekly volume (${wUnit()})</div>
      <div class="chart-wrap"><canvas id="vol-chart"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Workouts per week</div>
      <div class="chart-wrap"><canvas id="freq-chart"></canvas></div>
    </div>`;
  } else if(progressTab==='exercise'){
    if(!exList.length){
      html+='<div class="empty"><p>Log some workouts to see exercise progress.</p></div>';
    } else {
      if(!progressEx)progressEx=exList[0];
      html+=`<div class="input-group mb-12">
        <select id="ex-progress-select" onchange="selectProgressEx(this.value)">
          ${exList.map(e=>`<option value="${esc(e)}" ${e===progressEx?'selected':''}}>${esc(e)}</option>`).join('')}
        </select>
      </div>`;
      const exData=getExerciseProgressData(progressEx);
      if(exData.labels.length<2){
        html+='<div class="card"><div class="text-sm text-muted">Need at least 2 sessions to show progress.</div></div>';
      } else {
        html+=`<div class="card mb-12">
          <div class="card-title">Max weight (${wUnit()})</div>
          <div class="chart-wrap"><canvas id="ex-weight-chart"></canvas></div>
        </div>
        <div class="card">
          <div class="card-title">Max reps per session</div>
          <div class="chart-wrap"><canvas id="ex-reps-chart"></canvas></div>
        </div>`;
      }
    }
  } else if(progressTab==='photos'){
    html+=renderProgressPhotos();
  } else if(progressTab==='prs'){
    const exList=getExercisesWithHistory();
    if(!exList.length){
      html+='<div class="empty"><p>No workouts logged yet.</p></div>';
    } else {
      if(!prSelectedEx)prSelectedEx=exList[0];
      html+=`<div class="pr-ex-select-wrap">
        <select onchange="selectPrEx(this.value)">
          ${exList.map(e=>`<option value="${esc(e)}" ${e===prSelectedEx?'selected':''}>${esc(e)}</option>`).join('')}
        </select>
      </div>`;
      html+=renderPrDeepDive(prSelectedEx);
    }
  }

  html+='</div>';
  el.innerHTML=html;

  requestAnimationFrame(()=>{
    if(progressTab==='lifts'){
      KEY_LIFTS.forEach(lift=>{
        const sessions=getLiftData(lift);
        if(sessions.length<2)return;
        const ctx=document.getElementById('spark-'+lift.name.replace(/[^a-z0-9]/gi,'_'));
        if(ctx)drawSparkline(ctx,sessions.map(s=>dispW(s.orm)||0));
      });
    } else if(progressTab==='volume'){renderVolChart();renderFreqChart();}
    else if(progressTab==='exercise'&&progressEx){
      const d=getExerciseProgressData(progressEx);
      if(d.labels.length>=2){
        renderLineChart('ex-weight-chart',d.labels,d.weights,'#7c6dfa');
        renderLineChart('ex-reps-chart',d.labels,d.reps,'#3ecf7e');
      }
    }
  });
}


// ════════════════════════════════════════════
// KEY LIFTS DASHBOARD
// ════════════════════════════════════════════
function renderKeyLifts(){
  // Search bar for any exercise
  const exAll = getExercisesWithHistory();
  let html=`<div class="search-wrap mb-12" style="position:relative">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);width:14px;height:14px;color:var(--text3)"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input type="text" id="lift-search" placeholder="Search any exercise…" style="padding-left:32px" oninput="filterLiftSearch(this.value)">
  </div>
  <div id="lift-search-results" style="display:none" class="mb-12"></div>
  <div class="card-title mb-8">Key compound lifts</div>`;

  KEY_LIFTS.forEach(lift=>{
    const sessions=getLiftData(lift);
    if(!sessions.length){
      html+=`<div class="lift-card">
        <div class="lift-card-header">
          <div class="lift-name">${esc(lift.label)}</div>
          <div class="no-lift-data">No data yet</div>
        </div>
      </div>`;
      return;
    }
    const latest=sessions[sessions.length-1];
    const prev=sessions.length>1?sessions[sessions.length-2]:null;
    const orm=latest.orm?Math.round(latest.orm):null;
    const prevOrm=prev&&prev.orm?Math.round(prev.orm):null;
    const trend=orm&&prevOrm?(orm>prevOrm?'up':orm<prevOrm?'down':'flat'):'flat';
    const trendIcon=trend==='up'?'↑':trend==='down'?'↓':'→';
    const lastDate=new Date(latest.date).toLocaleDateString('en-CA',{month:'short',day:'numeric'});

    html+=`<div class="lift-card">
      <div class="lift-card-header">
        <div>
          <div class="lift-name">${esc(lift.label)}</div>
          <div class="text-xs text-muted mt-4">${esc(lift.name)} · Last: ${lastDate}</div>
        </div>
        ${orm?`<div style="text-align:right">
          <div class="lift-orm-label">Est. 1RM</div>
          <div class="lift-orm">${fmtW(orm)} <span style="font-size:11px;opacity:.6">${wUnit()}</span></div>
          <div class="lift-trend ${trend}">${trendIcon} ${prevOrm?Math.abs(orm-prevOrm)+' '+wUnit():'first session'}</div>
        </div>`:''}
      </div>
      <div class="lift-stats-row">
        <div class="lift-stat">Last: <strong>${fmtW(latest.weight)} ${wUnit()} × ${latest.reps}</strong></div>
        <div class="lift-stat">Sessions: <strong>${sessions.length}</strong></div>
        ${orm?`<div class="lift-stat">Epley 1RM: <strong>${fmtW(orm)} ${wUnit()}</strong></div>`:''}
      </div>
      <div class="lift-sparkline"><canvas id="spark-${lift.name.replace(/[^a-z0-9]/gi,'_')}"></canvas></div>
    </div>`;
  });
  return html;
}

function filterLiftSearch(q){
  const res=document.getElementById('lift-search-results');
  if(!res)return;
  if(!q){res.style.display='none';return;}
  const exAll=getExercisesWithHistory();
  const matches=exAll.filter(e=>e.toLowerCase().includes(q.toLowerCase())).slice(0,8);
  if(!matches.length){res.style.display='none';return;}
  res.style.display='block';
  res.innerHTML=matches.map(name=>{
    const sessions=[];
    workouts.forEach(w=>w.exercises.filter(e=>e.name===name).forEach(ex=>{
      let maxW=0,maxR=0;
      ex.sets.forEach(s=>{maxW=Math.max(maxW,parseFloat(s.weight)||0);maxR=Math.max(maxR,parseFloat(s.reps)||0);});
      if(maxW||maxR)sessions.push({date:w.date,weight:maxW,reps:maxR,orm:ormEpley(maxW,maxR)});
    }));
    sessions.sort((a,b)=>new Date(a.date)-new Date(b.date));
    if(!sessions.length)return '';
    const latest=sessions[sessions.length-1];
    const orm=latest.orm?Math.round(latest.orm):null;
    return `<div class="lift-card" style="margin-bottom:8px">
      <div class="lift-card-header">
        <div>
          <div class="lift-name">${esc(name)}</div>
          <div class="text-xs text-muted mt-4">Last: ${fmtW(latest.weight)} ${wUnit()} × ${latest.reps}</div>
        </div>
        ${orm?`<div style="text-align:right"><div class="lift-orm-label">Est. 1RM</div><div class="lift-orm">${fmtW(orm)} ${wUnit()}</div></div>`:''}
      </div>
      <div class="lift-sparkline"><canvas id="spark_s_${name.replace(/[^a-z0-9]/gi,'_')}"></canvas></div>
    </div>`;
  }).join('');

  // Draw sparklines
  requestAnimationFrame(()=>{
    matches.forEach(name=>{
      const sessions2=[];
      workouts.forEach(w=>w.exercises.filter(e=>e.name===name).forEach(ex=>{
        let maxW=0,maxR=0;
        ex.sets.forEach(s=>{maxW=Math.max(maxW,parseFloat(s.weight)||0);maxR=Math.max(maxR,parseFloat(s.reps)||0);});
        if(maxW||maxR)sessions2.push({date:w.date,orm:ormEpley(maxW,maxR)||maxW});
      }));
      sessions2.sort((a,b)=>new Date(a.date)-new Date(b.date));
      const ctx=document.getElementById(`spark_s_${name.replace(/[^a-z0-9]/gi,'_')}`);
      if(ctx&&sessions2.length>=2)drawSparkline(ctx,sessions2.map(s=>dispW(s.orm)||0));
    });
  });
}

function drawSparkline(ctx,data){
  if(!ctx||data.length<2)return;
  new Chart(ctx,{
    type:'line',
    data:{labels:data.map((_,i)=>i),datasets:[{data,borderColor:'#7c6dfa',borderWidth:1.5,pointRadius:0,tension:.3,fill:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{enabled:false}},
      scales:{x:{display:false},y:{display:false}}}
  });
}

// ════════════════════════════════════════════
// BODY HEATMAP
// ════════════════════════════════════════════
function renderBodyHeatmap(){
  const vol=getMuscleVolumeLast4Weeks();
  const maxVol=Math.max(...Object.values(vol),1);

  // Consistent 5-stop heat scale: none → cool purple → mid violet → warm amber → hot red-orange
  function heatColor(v){
    if(!v||v===0) return 'var(--bg3)';
    const t=Math.min(v/maxVol,1);
    if(t<0.25) return `rgba(124,109,250,${0.35+t*1.2})`;
    if(t<0.5)  return `rgba(160,80,230,${0.55+t*0.6})`;
    if(t<0.75) return `rgba(220,110,40,${0.65+t*0.4})`;
    return `rgba(245,${Math.round(80-t*30)},${Math.round(20+t*10)},${0.8+t*0.2})`;
  }

  function tip(m){ const v=vol[m]||0; return `${m}: ${v} set${v!==1?'s':''} (4 wks)`; }
  function reg(m,onclick){ return `class="muscle-region${onclick?' clickable':''}" fill="${heatColor(vol[m])}" stroke="var(--bg)" stroke-width="0.8" title="${tip(m)}"${onclick?` onclick="showMuscleDetail('${m}')"`:''}` }

  // ── FRONT VIEW — properly proportioned anatomy ──
  const front = `<svg viewBox="0 0 100 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="bodyClipF">
        <rect x="0" y="0" width="100" height="260"/>
      </clipPath>
    </defs>
    <!-- Body silhouette fill for context -->
    <path d="M38 34 Q50 30 62 34 L70 42 Q74 50 74 60 L78 90 Q82 100 80 115 L78 135 L68 135 L66 185 L68 240 L60 242 L58 185 L50 183 L42 185 L40 242 L32 240 L34 185 L32 135 L22 135 L20 115 Q18 100 22 90 L26 60 Q26 50 30 42 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.5"/>

    <!-- HEAD -->
    <ellipse cx="50" cy="16" rx="11" ry="13" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.5"/>
    <!-- Neck -->
    <rect x="45" y="27" width="10" height="9" rx="2" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- CHEST — pec major shape, two lobes -->
    <path d="M30 43 Q50 39 70 43 L72 55 Q65 62 50 63 Q35 62 28 55 Z" ${reg('chest',true)}/>

    <!-- SHOULDERS (front delts) — rounded deltoid cap -->
    <path d="M26 42 Q20 46 18 56 Q19 64 25 66 Q30 60 30 50 Z" ${reg('shoulders',true)}/>
    <path d="M74 42 Q80 46 82 56 Q81 64 75 66 Q70 60 70 50 Z" ${reg('shoulders',false)}/>

    <!-- BICEPS — elongated teardrop on upper arm -->
    <path d="M18 66 Q15 70 15 80 Q15 90 19 96 Q23 98 25 94 Q27 86 26 76 Q25 68 22 66 Z" ${reg('biceps',true)}/>
    <path d="M82 66 Q85 70 85 80 Q85 90 81 96 Q77 98 75 94 Q73 86 74 76 Q75 68 78 66 Z" ${reg('biceps',false)}/>

    <!-- Forearms (neutral) -->
    <path d="M16 97 Q13 106 14 118 Q16 122 19 121 Q22 116 22 106 Q21 98 18 97 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <path d="M84 97 Q87 106 86 118 Q84 122 81 121 Q78 116 78 106 Q79 98 82 97 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- ABS — rectus abdominis, 3-segment look -->
    <path d="M32 63 Q50 60 68 63 L67 90 Q60 94 50 94 Q40 94 33 90 Z" ${reg('abs',true)}/>
    <!-- Ab line hints -->
    <line x1="50" y1="63" x2="50" y2="94" stroke="var(--bg)" stroke-width="0.6" opacity="0.4"/>
    <line x1="33" y1="73" x2="67" y2="73" stroke="var(--bg)" stroke-width="0.6" opacity="0.4"/>
    <line x1="34" y1="83" x2="66" y2="83" stroke="var(--bg)" stroke-width="0.6" opacity="0.4"/>

    <!-- HIP / LOWER CORE transition -->
    <path d="M33 90 Q50 87 67 90 L66 100 Q50 103 34 100 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- QUADS — vastus medialis/lateralis shaped paths -->
    <path d="M34 100 L46 100 Q47 120 46 145 Q43 155 37 155 Q32 148 32 135 Q31 118 34 100 Z" ${reg('quads',true)}/>
    <path d="M54 100 L66 100 Q69 118 68 135 Q68 148 63 155 Q57 155 54 145 Q53 120 54 100 Z" ${reg('quads',false)}/>

    <!-- Knees (neutral) -->
    <ellipse cx="40" cy="157" rx="6" ry="4" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <ellipse cx="60" cy="157" rx="6" ry="4" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- CALVES — gastrocnemius diamond shape -->
    <path d="M35 162 Q32 172 33 186 Q35 194 39 194 Q43 190 43 178 Q42 167 38 162 Z" ${reg('calves',true)}/>
    <path d="M65 162 Q68 172 67 186 Q65 194 61 194 Q57 190 57 178 Q58 167 62 162 Z" ${reg('calves',false)}/>

    <!-- Shins/ankles neutral -->
    <path d="M34 195 Q32 210 33 225 L38 226 Q41 212 40 196 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <path d="M66 195 Q68 210 67 225 L62 226 Q59 212 60 196 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- Feet -->
    <ellipse cx="37" cy="230" rx="8" ry="5" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <ellipse cx="63" cy="230" rx="8" ry="5" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <text x="50" y="250" text-anchor="middle" fill="var(--text3)" font-size="7" font-family="sans-serif" letter-spacing="1">FRONT</text>
  </svg>`;

  // ── BACK VIEW ──
  const back = `<svg viewBox="0 0 100 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Body silhouette fill -->
    <path d="M38 34 Q50 30 62 34 L70 42 Q74 50 74 60 L78 90 Q82 100 80 115 L78 135 L68 135 L66 185 L68 240 L60 242 L58 185 L50 183 L42 185 L40 242 L32 240 L34 185 L32 135 L22 135 L20 115 Q18 100 22 90 L26 60 Q26 50 30 42 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.5"/>

    <!-- HEAD back -->
    <ellipse cx="50" cy="16" rx="11" ry="13" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.5"/>
    <rect x="45" y="27" width="10" height="9" rx="2" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- TRAPS — trapezius diamond shape upper back -->
    <path d="M30 34 Q50 30 70 34 L72 48 Q60 52 50 51 Q40 52 28 48 Z" ${reg('shoulders',false)}/>

    <!-- REAR DELTS — posterior deltoid cap -->
    <path d="M26 42 Q20 47 18 57 Q19 65 25 67 Q30 61 30 51 Z" ${reg('shoulders',false)}/>
    <path d="M74 42 Q80 47 82 57 Q81 65 75 67 Q70 61 70 51 Z" ${reg('shoulders',false)}/>

    <!-- LATS — latissimus dorsi, sweeping fan shapes -->
    <path d="M28 50 Q22 60 22 80 Q23 100 28 108 Q38 112 44 105 Q46 90 44 70 Q40 55 34 50 Z" ${reg('back',true)}/>
    <path d="M72 50 Q78 60 78 80 Q77 100 72 108 Q62 112 56 105 Q54 90 56 70 Q60 55 66 50 Z" ${reg('back',false)}/>

    <!-- MIDDLE/LOWER BACK — erector spinae columns -->
    <path d="M44 50 L56 50 Q58 68 57 95 L50 98 L43 95 Q42 68 44 50 Z" ${reg('back',false)}/>

    <!-- TRICEPS — horseshoe on back of upper arm -->
    <path d="M18 66 Q15 72 15 83 Q15 93 19 97 Q23 99 25 95 Q27 87 26 76 Q24 68 21 66 Z" ${reg('triceps',true)}/>
    <path d="M82 66 Q85 72 85 83 Q85 93 81 97 Q77 99 75 95 Q73 87 74 76 Q76 68 79 66 Z" ${reg('triceps',false)}/>

    <!-- Forearms neutral -->
    <path d="M16 98 Q13 108 14 120 Q16 123 19 122 Q22 117 22 107 Q21 99 18 98 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <path d="M84 98 Q87 108 86 120 Q84 123 81 122 Q78 117 78 107 Q79 99 82 98 Z" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- GLUTES — gluteus maximus, round full shape -->
    <path d="M34 100 Q32 112 33 128 Q35 140 44 143 Q50 144 56 143 Q65 140 67 128 Q68 112 66 100 Q50 97 34 100 Z" ${reg('glutes',true)}/>

    <!-- HAMSTRINGS — biceps femoris / semitendinosus -->
    <path d="M35 144 L46 143 Q47 165 45 185 Q42 193 37 192 Q32 185 33 168 Q33 154 35 144 Z" ${reg('hamstrings',true)}/>
    <path d="M54 143 L65 144 Q67 154 67 168 Q68 185 63 192 Q58 193 55 185 Q53 165 54 143 Z" ${reg('hamstrings',false)}/>

    <!-- Knees -->
    <ellipse cx="40" cy="194" rx="6" ry="4" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <ellipse cx="60" cy="194" rx="6" ry="4" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <!-- CALVES back — fuller gastrocnemius -->
    <path d="M34 199 Q31 210 32 224 Q34 230 38 230 Q42 226 42 214 Q42 203 38 199 Z" ${reg('calves',false)}/>
    <path d="M66 199 Q69 210 68 224 Q66 230 62 230 Q58 226 58 214 Q58 203 62 199 Z" ${reg('calves',false)}/>

    <!-- Feet -->
    <ellipse cx="37" cy="235" rx="8" ry="5" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>
    <ellipse cx="63" cy="235" rx="8" ry="5" fill="var(--bg4)" stroke="var(--border)" stroke-width="0.4"/>

    <text x="50" y="250" text-anchor="middle" fill="var(--text3)" font-size="7" font-family="sans-serif" letter-spacing="1">BACK</text>
  </svg>`;

  const groups = [
    {key:'chest',label:'Chest'},     {key:'back',label:'Back'},
    {key:'shoulders',label:'Shoulders'},{key:'biceps',label:'Biceps'},
    {key:'triceps',label:'Triceps'}, {key:'quads',label:'Quads'},
    {key:'hamstrings',label:'Hamstrings'},{key:'glutes',label:'Glutes'},
    {key:'calves',label:'Calves'},   {key:'abs',label:'Abs'},
  ];

  // Build legend stops matching heatColor exactly
  const legendStops = [0,0.12,0.25,0.38,0.5,0.62,0.75,0.88,1].map(t=>{
    let col;
    if(t===0) col='var(--bg3)';
    else if(t<0.25) col=`rgba(124,109,250,${(0.35+t*1.2).toFixed(2)})`;
    else if(t<0.5)  col=`rgba(160,80,230,${(0.55+t*0.6).toFixed(2)})`;
    else if(t<0.75) col=`rgba(220,110,40,${(0.65+t*0.4).toFixed(2)})`;
    else            col=`rgba(245,${Math.round(80-t*30)},${Math.round(20+t*10)},${(0.8+t*0.2).toFixed(2)})`;
    return col;
  });

  let html=`<div class="card mb-12">
    <div class="card-title mb-8">Muscle volume — last 4 weeks</div>
    ${!Object.keys(vol).length?'<div class="text-xs text-muted mb-8">Log workouts to see muscle group volume mapped to your body. Each region colours by weekly set count — pale means untrained, bright means well-hit.</div>':''}
    <div class="body-wrap">
      <div class="body-svg-col">${front}</div>
      <div class="body-svg-col">${back}</div>
    </div>
    <div style="height:10px;border-radius:5px;margin-top:8px;background:linear-gradient(to right,${legendStops.join(',')})"></div>
    <div class="heatmap-labels"><span>0 sets</span><span>Low</span><span>Moderate</span><span>High</span></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">`;

  groups.forEach(g=>{
    const v=vol[g.key]||0;
    const pct=maxVol>0?Math.round(v/maxVol*100):0;
    const status=v===0?'None':v<4?'Low':v<8?'Moderate':'High';
    const statusColor=v===0?'var(--text3)':v<4?'var(--orange)':v<8?'var(--accent2)':'var(--green)';
    html+=`<div class="stat-card" id="muscle-${g.key}">
      <div class="stat-label">${g.label}</div>
      <div style="font-size:16px;font-weight:700;font-family:var(--mono);color:${statusColor}">${v} <span style="font-size:11px;font-weight:400;color:var(--text3)">sets</span></div>
      <div style="margin-top:6px;height:4px;background:var(--bg4);border-radius:2px">
        <div style="height:100%;width:${pct}%;background:${statusColor};border-radius:2px;transition:width .5s"></div>
      </div>
    </div>`;
  });
  html+=`</div>`;
  return html;
}
function showMuscleDetail(muscle){
  const el=document.getElementById(`muscle-${muscle}`);
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
}


// ════════════════════════════════════════════
// QUICK START
// ════════════════════════════════════════════
function startQuickSession(){
  const rec = getNextSessionRecommendation();
  if(!rec) { startNewWorkout(); return; }
  // Build exercises from suggestions — look up their type from EXERCISES/MUSCLE_MAP
  const exercises = rec.suggestedExercises.map(name => {
    const type = EXERCISES.bodyweight.includes(name) ? 'bodyweight'
               : EXERCISES.cardio.includes(name) ? 'cardio' : 'strength';
    return { id: Date.now()+Math.random(), name, type, sets: [{}] };
  });
  activeWorkout = {
    name: rec.sessionLabel + ' Day',
    startTime: Date.now(),
    exercises
  };
  nav('log');
}

// ════════════════════════════════════════════
// AI SPLIT RECOMMENDER
// ════════════════════════════════════════════
const SPLIT_QUESTIONS = [
  {
    key: 'days',
    q: 'How many days per week can you train?',
    opts: ['2–3 days', '3–4 days', '4–5 days', '5–6 days']
  },
  {
    key: 'goal',
    q: "What's your primary goal?",
    opts: ['Build muscle (hypertrophy)', 'Gain strength', 'Lose fat & tone', 'Athletic performance']
  },
  {
    key: 'experience',
    q: 'Training experience?',
    opts: ['Beginner (< 1 year)', 'Intermediate (1–3 years)', 'Advanced (3+ years)', 'Returning after break']
  },
  {
    key: 'equipment',
    q: 'Equipment available?',
    opts: ['Full gym', 'Dumbbells only', 'Barbells + rack', 'Cables + machines']
  }
];

function openSplitModal(){
  splitAnswers = {};
  splitStep = 0;
  renderSplitModal();
}

function renderSplitModal(){
  const ml = document.getElementById('modal-layer');
  const q = SPLIT_QUESTIONS[splitStep];
  const progress = Math.round((splitStep / SPLIT_QUESTIONS.length) * 100);

  ml.innerHTML = `
  <div class="modal-bg open" id="split-modal" onclick="if(event.target===this)closeModalBg(this)">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="flex-between mb-12">
        <div class="modal-title" style="margin-bottom:0">Training plan builder</div>
        <div style="font-size:11px;color:var(--text3)">${splitStep+1} / ${SPLIT_QUESTIONS.length}</div>
      </div>
      <div style="height:3px;background:var(--bg3);border-radius:2px;margin-bottom:16px">
        <div style="height:100%;width:${progress}%;background:var(--accent);border-radius:2px;transition:width .3s"></div>
      </div>
      <div class="split-question">
        <div class="split-question-label">${q.q}</div>
        <div class="split-option-grid">
          ${q.opts.map(opt => `
            <button class="split-option${splitAnswers[q.key]===opt?' selected':''}"
              onclick="selectSplitAnswer('${q.key}','${opt.replace(/'/g,"\'")}')">
              ${opt}
            </button>`).join('')}
        </div>
      </div>
      <div class="flex gap-8 mt-8">
        ${splitStep>0?`<button class="btn flex-1" onclick="splitStep--;renderSplitModal()">← Back</button>`:''}
        <button class="btn flex-1" onclick="closeModalAnim('split-modal')">Cancel</button>
        ${splitAnswers[q.key]?`<button class="btn btn-primary flex-1" onclick="advanceSplitStep()">
          ${splitStep===SPLIT_QUESTIONS.length-1?'Build my plan →':'Next →'}
        </button>`:''}
      </div>
    </div>
  </div>`;
}

function selectSplitAnswer(key, val){
  splitAnswers[key] = val;
  renderSplitModal();
}

function advanceSplitStep(){
  if(splitStep < SPLIT_QUESTIONS.length - 1){
    splitStep++;
    renderSplitModal();
  } else {
    fetchSplitPlan();
  }
}

async function fetchSplitPlan(){
  const ml = document.getElementById('modal-layer');
  ml.innerHTML = `
  <div class="modal-bg open" id="split-modal">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">Building your plan…</div>
      <div class="split-loading">
        <div class="ai-typing" style="justify-content:center;margin-bottom:12px">
          <div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div>
        </div>
        <div style="font-size:12px;color:var(--text3)">Personalising to your history and goals</div>
      </div>
    </div>
  </div>`;

  // Build context from user's actual workout history
  const vol = getMuscleVolumeLast4Weeks();
  const topLifts = KEY_LIFTS.map(l => {
    const s = getLiftData(l);
    if(!s.length) return null;
    const last = s[s.length-1];
    return `${l.label}: ${fmtW(last.weight)} ${wUnit()} × ${last.reps}`;
  }).filter(Boolean).join(', ');

  const neglected = Object.entries(vol).filter(([m,v])=>v<4).map(([m])=>m).join(', ') || 'none';
  const split = analyzeSplit();

  const prompt = `You are an expert strength and conditioning coach. Build a personalised 4-week progressive training plan.

User profile:
- Training days: ${splitAnswers.days}
- Goal: ${splitAnswers.goal}
- Experience: ${splitAnswers.experience}
- Equipment: ${splitAnswers.equipment}
- Current detected split: ${split?split.splitName:'Unknown'}
- Recent key lift bests: ${topLifts||'No data'}
- Neglected muscle groups: ${neglected}

Return ONLY valid JSON (no markdown, no preamble) in this exact structure:
{
  "planName": "string",
  "overview": "2-sentence overview",
  "weeks": [
    {
      "week": 1,
      "theme": "string (e.g. Foundation)",
      "focus": "string (e.g. Volume accumulation)",
      "days": [
        {
          "day": "Monday",
          "sessionName": "string",
          "exercises": [
            {"name": "string", "sets": "string e.g. 4×8", "notes": "string e.g. RPE 7-8"}
          ]
        }
      ]
    }
  ]
}

Make the plan specific to their goal and history. Use exercises appropriate to their equipment. Progress intensity week over week.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2500,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    const raw = data.content && data.content[0] && data.content[0].text;
    if(!raw) throw new Error('No response');
    const plan = JSON.parse(raw.replace(/```json|```/g,'').trim());
    renderSplitPlan(plan);
  } catch(e) {
    const modal = document.getElementById('split-modal');
    if(modal) modal.querySelector('.modal').innerHTML = `
      <div class="modal-handle"></div>
      <div class="modal-title">Plan builder</div>
      <div style="color:var(--red);font-size:13px;margin-bottom:16px">Could not generate plan. Please try again.</div>
      <div class="flex gap-8">
        <button class="btn flex-1" onclick="closeModalAnim('split-modal')">Close</button>
        <button class="btn btn-primary flex-1" onclick="fetchSplitPlan()">Retry</button>
      </div>`;
  }
}

function renderSplitPlan(plan){
  const ml = document.getElementById('modal-layer');
  let weeksHtml = plan.weeks.map((w,wi) => `
    <div class="split-plan-week" id="spw-${wi}">
      <div class="split-plan-week-header" onclick="toggleSplitWeek(${wi})">
        <div>
          <div class="split-plan-week-title">Week ${w.week}: ${esc(w.theme)}</div>
          <div class="split-plan-week-focus">${esc(w.focus)}</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="split-plan-days">
        ${w.days.map(d => `
          <div class="split-plan-day">
            <div class="split-plan-day-name">${esc(d.day)} — ${esc(d.sessionName)}</div>
            <div class="split-plan-ex">
              ${d.exercises.map(e => `<strong>${esc(e.name)}</strong> ${esc(e.sets)}${e.notes?` <span style="color:var(--text3)">· ${esc(e.notes)}</span>`:''}`).join('<br>')}
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  ml.innerHTML = `
  <div class="modal-bg open" id="split-modal" onclick="if(event.target===this)closeModalBg(this)">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">${esc(plan.planName)}</div>
      <div class="coach-line mb-12">${esc(plan.overview)}</div>
      ${weeksHtml}
      <div class="flex gap-8 mt-12">
        <button class="btn flex-1" onclick="closeModalAnim('split-modal')">Close</button>
        <button class="btn btn-primary flex-1" onclick="openSplitModal()">Rebuild plan</button>
      </div>
    </div>
  </div>`;

  // Auto-open first week
  toggleSplitWeek(0);
}

function toggleSplitWeek(i){
  const el = document.getElementById(`spw-${i}`);
  if(el) el.classList.toggle('open');
}

// ════════════════════════════════════════════
// IMPROVED CALENDAR
// ════════════════════════════════════════════
function renderCalendar(){
  const today = new Date();
  today.setHours(0,0,0,0);

  // Map date keys → array of workout indices
  const woDates = {};
  workouts.forEach((w,i) => {
    const d = new Date(w.date);
    d.setHours(0,0,0,0);
    const key = d.toISOString().slice(0,10);
    if(!woDates[key]) woDates[key] = [];
    woDates[key].push(i);
  });

  // Build 13 weeks ending today, aligned to Monday
  // Find the Monday of the current week
  const startMonday = new Date(today);
  const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1; // 0=Mon
  startMonday.setDate(today.getDate() - dayOfWeek - 12*7);
  startMonday.setHours(0,0,0,0);

  const cells = [];
  for(let i = 0; i < 91; i++){
    const d = new Date(startMonday);
    d.setDate(startMonday.getDate() + i);
    const key = d.toISOString().slice(0,10);
    const isToday = key === today.toISOString().slice(0,10);
    const wos = woDates[key] || [];
    const firstName = wos.length ? (workouts[wos[0]].name||'Workout') : '';
    cells.push({ key, isToday, wos, d, firstName });
  }

  let html = `<div class="card mb-12">
    <div class="card-title mb-8">13-week training calendar</div>
    <div class="cal-week-labels">
      ${['M','T','W','T','F','S','S'].map(d=>`<div class="cal-day-label">${d}</div>`).join('')}
    </div>
    <div class="cal-grid">`;

  cells.forEach(cell => {
    const isSelected = cell.key === calSelectedKey;
    const dateNum = cell.d.getDate();
    const clickable = cell.wos.length > 0;
    html += `<div class="cal-cell${cell.wos.length?' has-workout':''}${cell.isToday?' today':''}${isSelected?' selected':''}"
      ${clickable?`onclick="selectCalDay('${cell.key}')"`:''}
      title="${cell.d.toLocaleDateString('en-CA',{weekday:'short',month:'short',day:'numeric'})}${cell.wos.length?' — '+cell.firstName:''}">
      <div class="cal-date">${dateNum}</div>
      ${cell.wos.length?`<div class="cal-dot"></div>`:''}
    </div>`;
  });

  html += `</div>
    <div class="cal-legend" style="margin-top:8px">
      <div class="cal-cell" style="width:12px;height:12px;display:inline-block"></div><span>Rest</span>
      <div class="cal-cell has-workout" style="width:12px;height:12px;display:inline-block"></div><span>Workout</span>
      <div class="cal-cell today" style="width:12px;height:12px;display:inline-block"></div><span>Today</span>
    </div>`;

  // Selected day detail
  if(calSelectedKey && woDates[calSelectedKey]){
    const idxs = woDates[calSelectedKey];
    const dateLabel = new Date(calSelectedKey+'T12:00:00').toLocaleDateString('en-CA',{weekday:'long',month:'long',day:'numeric'});
    html += `<div class="cal-selected-detail">
      <div class="cal-selected-date">${dateLabel}</div>`;
    idxs.forEach(idx => {
      html += renderWorkoutCard(workouts[idx], true, idx);
    });
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

function selectCalDay(key){
  calSelectedKey = calSelectedKey === key ? null : key;
  switchProgressTab('calendar');
}


function switchProgressTab(tab){
  progressTab=tab;
  renderProgress(document.getElementById('main'),document.getElementById('topbar-right'));
  // Scroll active tab into view
  requestAnimationFrame(()=>{
    const activeTab=document.querySelector('.tabs .tab.active');
    if(activeTab)activeTab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  });
}
function selectPrEx(name){prSelectedEx=name;prAiLoading=false;renderProgress(document.getElementById('main'),document.getElementById('topbar-right'));}
function selectProgressEx(name){progressEx=name;renderProgress(document.getElementById('main'),document.getElementById('topbar-right'));}

function renderVolChart(){
  const {labels,data}=getWeeklyVolumeData();
  const ctx=document.getElementById('vol-chart');
  if(!ctx)return;
  new Chart(ctx,{type:'bar',data:{labels,datasets:[{data,backgroundColor:'rgba(124,109,250,.5)',borderColor:'#7c6dfa',borderWidth:1,borderRadius:4}]},options:chartOpts()});
}
function renderFreqChart(){
  const {labels,data}=getWeeklyFreqData();
  const ctx=document.getElementById('freq-chart');
  if(!ctx)return;
  new Chart(ctx,{type:'bar',data:{labels,datasets:[{data,backgroundColor:'rgba(62,207,126,.5)',borderColor:'#3ecf7e',borderWidth:1,borderRadius:4}]},options:chartOpts()});
}
function renderLineChart(id,labels,data,color){
  const ctx=document.getElementById(id);
  if(!ctx)return;
  new Chart(ctx,{type:'line',data:{labels,datasets:[{data,borderColor:color,backgroundColor:color+'22',borderWidth:2,pointRadius:3,tension:.3,fill:true}]},options:chartOpts()});
}
function chartOpts(){
  return{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{
    x:{grid:{color:'#2e2e38'},ticks:{color:'#9997a8',font:{family:'DM Mono',size:10}}},
    y:{grid:{color:'#2e2e38'},ticks:{color:'#9997a8',font:{family:'DM Mono',size:10}},beginAtZero:true}
  }};
}

// ════════════════════════════════════════════
// WORKOUT ACTIONS
// ════════════════════════════════════════════
function startNewWorkout(){
  activeWorkout={name:'',startTime:Date.now(),exercises:[]};
  openExBlockStats=new Set();
  nav('log');
}

function repeatWorkout(idx){
  const w=workouts[idx];
  if(!w)return;
  activeWorkout={name:w.name,startTime:Date.now(),exercises:w.exercises.map(e=>({
    id:e.id,name:e.name,type:e.type,supersetId:e.supersetId,
    sets:e.sets.map(s=>({reps:s.reps||'',weight:s.weight||undefined,rpe:s.rpe||'',dist:s.dist||'',duration:s.duration||''}))
  }))};
  nav('log');
}
function startEditWorkout(idx){
  editingWorkout={idx,workout:JSON.parse(JSON.stringify(workouts[idx]))};
  nav('log');
}
function saveEditedWorkout(){
  if(!editingWorkout)return;
  workouts[editingWorkout.idx]=editingWorkout.workout;
  editingWorkout=null;
  save();
  nav('history');
}
function cancelEdit(){
  editingWorkout=null;
  nav('history');
}

function confirmDiscardWorkout(){
  showConfirm('Discard workout?','All sets logged in this session will be lost.','Discard','btn-danger',function(){
    activeWorkout=null;
    clearInterval(timerInterval);timerInterval=null;
    stopRestTimer();
    nav('home');
  });
}
function confirmDeleteWorkout(idx){
  const w=workouts[idx];
  showConfirm(`Delete "${esc(w&&w.name||'this workout')}"?`,'This cannot be undone.','Delete','btn-danger',function(){
    workouts.splice(idx,1);
    save();
    nav('history');
  });
}
function confirmDeleteTemplate(i){
  showConfirm('Delete template?','','Delete','btn-danger',function(){
    templates.splice(i,1);save();nav('history');
  });
}

function addSet(ei){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  const ex=wo.exercises[ei];
  if(!ex)return;
  // Pre-fill with last set values
  const last=ex.sets[ex.sets.length-1]||{};
  ex.sets.push({reps:last.reps||undefined,weight:last.weight||undefined,rpe:last.rpe||undefined,dist:last.dist||undefined,duration:last.duration||undefined});
  renderLog(document.getElementById('main'),document.getElementById('topbar-right'));
}
function removeSet(ei,si){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  wo.exercises[ei].sets.splice(si,1);
  renderLog(document.getElementById('main'),document.getElementById('topbar-right'));
}
function updateSet(ei,si,field,val){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  const s=wo.exercises[ei].sets[si];
  if(!s)return;
  if(field==='weight_disp'){
    s.weight=val===''?undefined:toKg(val);
  } else {
    s[field]=val===''?undefined:(parseFloat(val)||val||undefined);
  }
}


// ── Live PR check ──
function checkLivePR(ei,si){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo) return;
  const ex=wo.exercises[ei];
  if(!ex||ex.type==='cardio') return;
  const s=ex.sets[si];
  if(!s) return;
  const flash=document.getElementById(`prflash-${ei}-${si}`);
  if(!flash) return;
  const reps=parseFloat(s.reps)||0;
  const weight=parseFloat(s.weight)||0;
  if(!reps||!weight){ flash.style.display='none'; return; }
  const pr=getPrForRepRange(ex.name,reps);
  if(pr&&weight>pr.weight){
    flash.textContent=`🏆 ${fmtW(weight)} ${wUnit()} PR!`;
    flash.style.display='inline-block';
    // also flash the weight input
    const wi=document.getElementById(`wi-${ei}-${si}`);
    if(wi) wi.style.borderColor='var(--orange)';
  } else {
    flash.style.display='none';
    const wi=document.getElementById(`wi-${ei}-${si}`);
    if(wi) wi.style.borderColor='';
  }
}

// ── Set notes ──
function toggleSetNote(ei,si){
  const wrap=document.getElementById(`setnote-${ei}-${si}`);
  const btn=document.getElementById(`notebtn-${ei}-${si}`);
  if(!wrap) return;
  const open=wrap.style.display==='none'||!wrap.style.display;
  wrap.style.display=open?'block':'none';
  if(open){
    const ta=wrap.querySelector('textarea');
    if(ta){ta.focus();autoResizeNote(ta);}
  }
}

function updateSetNote(ei,si,val){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo) return;
  const s=wo.exercises[ei]&&wo.exercises[ei].sets[si];
  if(!s) return;
  // Preserve any existing superset/dropset tags
  const tags=(s.notes||'').match(/\[(?:SUPERSET:[^\]]+|DROPSET)\]/g)||[];
  s.notes=(tags.join(' ')+(val?' '+val:'')).trim()||undefined;
  // Update note button style
  const btn=document.getElementById(`notebtn-${ei}-${si}`);
  if(btn) btn.className=`set-note-btn${val?' has-note':''}`;
}

function autoResizeNote(ta){
  ta.style.height='auto';
  ta.style.height=Math.min(ta.scrollHeight,80)+'px';
}


function toggleSetExtras(ei,si){
  const el=document.getElementById(`setextras-${ei}-${si}`);
  if(el) el.style.display=el.style.display==='none'?'block':'none';
}
function updateSwMini(){
  const d=document.getElementById('sw-display-mini');
  if(d) d.textContent=swFmt(swMs);
  const p=document.getElementById('sw-play-mini');
  const pa=document.getElementById('sw-pause-mini');
  if(p) p.style.display=swRunning?'none':'block';
  if(pa) pa.style.display=swRunning?'block':'none';
}
// Auto-expand stopwatch when it starts

function toggleStopwatchExpand(){
  const exp=document.getElementById('sw-expanded');
  const hint=document.getElementById('sw-expand-hint');
  const bar=document.getElementById('sw-bar');
  if(!exp)return;
  const open=exp.style.display==='none';
  exp.style.display=open?'block':'none';
  if(bar) bar.classList.toggle('collapsed',!open);
  if(hint) hint.textContent=open?'Tap to collapse':'Tap to expand';
}



function toggleExBlockStats(ei){
  if(openExBlockStats.has(ei)) openExBlockStats.delete(ei);
  else openExBlockStats.add(ei);
  // Patch DOM directly — avoid full re-render to preserve input focus
  const block=document.getElementById(`exblock-${ei}`);
  if(!block){ renderLog(document.getElementById('main'),document.getElementById('topbar-right')); return; }
  const existing=block.querySelector('.ex-block-stats');
  const btn=block.querySelector('.ex-info-btn');
  if(openExBlockStats.has(ei)){
    if(!existing){
      const wo=editingWorkout?editingWorkout.workout:activeWorkout;
      const ex=wo&&wo.exercises[ei];
      if(!ex)return;
      const div=document.createElement('div');
      div.innerHTML=renderExBlockStatsPanel(ex.name,ei);
      // Insert after ex-header
      const header=block.querySelector('.ex-header');
      if(header)header.after(div.firstChild);
    }
    if(btn)btn.classList.add('active');
  } else {
    if(existing)existing.remove();
    if(btn)btn.classList.remove('active');
  }
}

function renderExBlockStatsPanel(name, ei){
  const brief=getExerciseBrief(name);
  const customMeta=getCustomExMeta(name);
  let html=`<div class="ex-block-stats">
    <div class="ex-block-stats-title">
      <span>Stats · ${esc(name)}</span>
      <button style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:12px;padding:0" onclick="toggleExBlockStats(${ei})">✕</button>
    </div>`;

  if(customMeta){
    const tags=[];
    if(customMeta.muscles&&customMeta.muscles.length)tags.push(...customMeta.muscles.map(m=>`<span class="ex-stats-meta-tag">${m}</span>`));
    if(customMeta.equipment)tags.push(`<span class="ex-stats-meta-tag">${customMeta.equipment}</span>`);
    if(tags.length)html+=`<div class="ex-stats-meta-tags" style="margin-bottom:6px">${tags.join('')}</div>`;
  }

  if(!brief){
    html+=`<div style="font-size:12px;color:var(--text3);font-style:italic">No prior history for this exercise.</div>`;
  } else {
    // Last session: all sets, not just max — gives full context
    const hist=getExerciseHistory(name);
    const lastSess=hist.length?hist[hist.length-1]:null;
    if(lastSess){
      const lastDate=new Date(lastSess.date).toLocaleDateString('en-CA',{month:'short',day:'numeric'});
      const setsStr=lastSess.sets.filter(s=>s.reps&&s.weight)
        .map(s=>`${s.reps}×${fmtW(s.weight)}${s.rpe?' @'+s.rpe.replace('max_effort','MAX').replace('challenging','HARD').replace('moderate','MOD').replace('easy','EASY'):''}`)
        .join(' · ');
      if(setsStr){
        html+=`<div class="ex-stats-row">
          <span class="ex-stats-row-label">Last (${lastDate})</span>
          <span class="ex-stats-row-val" style="font-size:11px">${setsStr}</span>
        </div>`;
      }
    }
    if(brief.pr){
      html+=`<div class="ex-stats-row">
        <span class="ex-stats-row-label">All-time best</span>
        <span class="ex-stats-row-val">${fmtW(brief.pr.weight)} ${wUnit()} × ${brief.pr.reps}</span>
      </div>`;
      const orm=ormEpley(brief.pr.weight,brief.pr.reps);
      if(orm)html+=`<div class="ex-stats-row">
        <span class="ex-stats-row-label">Est. 1RM</span>
        <span class="ex-stats-row-val" style="color:var(--accent2)">${fmtW(Math.round(orm))} ${wUnit()}</span>
      </div>`;
    }
    // Quick rep-range lookup
    html+=`<div class="ex-stats-reps-wrap">
      <div class="ex-stats-reps-label">PR for rep range</div>
      <input type="number" class="ex-stats-reps-input w-full" min="1" max="50" placeholder="Type reps to look up PR…"
        oninput="lookupRepRangePR('${name.replace(/'/g,"\'")}',this.value,this)"
        onclick="event.stopPropagation()">
      <div class="ex-stats-pr-flash" id="exprflash-blk-${ei}"></div>
    </div>`;
  }
  html+=`</div>`;
  return html;
}

function toggleSetDone(ei,si){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  const s=wo.exercises[ei].sets[si];
  if(!s)return;
  s.done=!s.done;
  const row=document.getElementById(`setrow-${ei}-${si}`);
  if(row){
    row.classList.toggle('completed',!!s.done);
    const svg=row.querySelector('.set-check svg');
    if(svg)svg.style.display=s.done?'block':'none';
    const chk=row.querySelector('.set-check');
    if(chk&&s.done){
      chk.classList.add('just-done');
      setTimeout(()=>chk.classList.remove('just-done'),400);
      // Brief green row flash
      row.style.transition='background .15s';
      row.style.background='rgba(62,207,126,.08)';
      setTimeout(()=>{ row.style.background=''; },600);
    }
  }
  if(s.done&&!editingWorkout){
    swStartFresh();
    updateMicroCoach(ei,si);
  }
}
function showSetActions(ei,si){
  const el=document.getElementById(`actions-${ei}-${si}`);
  if(el)el.classList.add('visible');
}
function hideSetActions(ei,si){
  const el=document.getElementById(`actions-${ei}-${si}`);
  if(el)el.classList.remove('visible');
}
function setRPE(ei,si,val){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  const s=wo.exercises[ei].sets[si];
  if(!s)return;
  s.rpe=val||undefined;
  // Update just the select's class without full re-render
  const sel=document.getElementById(`rpesel-${ei}-${si}`);
  if(sel){
    sel.className='rpe-select rpe-'+(val||'none');
  }
}
function toggleDropset(ei,si){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  const s=wo.exercises[ei].sets[si];
  if(!s)return;
  const hasDropset=s.notes&&s.notes.includes('[DROPSET]');
  if(hasDropset){
    s.notes=(s.notes||'').replace('[DROPSET]','').trim()||undefined;
  } else {
    s.notes=('[DROPSET] '+(s.notes||'')).trim();
  }
  // Update button state + set-num badge without full re-render
  const btn=document.getElementById(`dropbtn-${ei}-${si}`);
  if(btn) btn.className='dropset-btn'+(hasDropset?'':' active');
  const badge=document.getElementById(`dropbadge-${ei}-${si}`);
  if(badge) badge.style.display=hasDropset?'none':'inline';
}
function removeExercise(ei){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  wo.exercises.splice(ei,1);
  renderLog(document.getElementById('main'),document.getElementById('topbar-right'));
}
function addSuperset(ei){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  const ssId='ss_'+Date.now();
  wo.exercises[ei].supersetId=ssId;
  renderLog(document.getElementById('main'),document.getElementById('topbar-right'));
}

// ════════════════════════════════════════════
// REST TIMER
// ════════════════════════════════════════════

function toggleStopwatchExpand(){
  const exp=document.getElementById('sw-expanded');
  const hint=document.getElementById('sw-expand-hint');
  const bar=document.getElementById('sw-bar');
  if(!exp)return;
  const open=exp.style.display==='none';
  exp.style.display=open?'block':'none';
  if(bar) bar.classList.toggle('collapsed',!open);
  if(hint) hint.textContent=open?'Tap to collapse':'Tap to expand';
}

function swStartFresh(){
  swReset();
  swToggle();
  swExpanded=false;
  updateSwMini();
}
function swToggle(){
  if(swRunning){
    clearInterval(swInterval);
    swInterval=null;
    swRunning=false;
  } else {
    const start=Date.now()-swMs;
    swInterval=setInterval(()=>{
      swMs=Date.now()-start;
      swRefreshDisplay();
    },100);
    swRunning=true;
  }
  swRefreshDisplay();
  const playIcon=document.getElementById('sw-play-icon');
  const pauseIcon=document.getElementById('sw-pause-icon');
  const btn=document.getElementById('sw-toggle-btn');
  if(playIcon)playIcon.style.display=swRunning?'none':'block';
  if(pauseIcon)pauseIcon.style.display=swRunning?'block':'none';
  if(btn){btn.className=swRunning?'sw-btn sw-stop':'sw-btn sw-start';}
}
function swLap(){
  if(!swRunning&&swMs===0)return;
  swLaps.push(swMs);
  swRefreshLaps();
}
function swReset(){
  clearInterval(swInterval);
  swInterval=null;
  swRunning=false;
  swMs=0;
  swLaps=[];
  swRefreshDisplay();
  swRefreshLaps();
  const playIcon=document.getElementById('sw-play-icon');
  const pauseIcon=document.getElementById('sw-pause-icon');
  const btn=document.getElementById('sw-toggle-btn');
  if(playIcon)playIcon.style.display='block';
  if(pauseIcon)pauseIcon.style.display='none';
  if(btn)btn.className='sw-btn sw-start';
}
function swFmt(ms){
  const total=Math.floor(ms/100);
  const t=Math.floor(total/10),d=total%10;
  const m=Math.floor(t/60),s=t%60;
  return `${m}:${String(s).padStart(2,'0')}.${d}`;
}
function swRefreshDisplay(){
  const el=document.getElementById('sw-display');
  if(!el)return;
  el.textContent=swFmt(swMs);
  el.className='sw-display '+(swRunning?'running':'stopped');
}
function swRefreshLaps(){
  const bar=document.getElementById('sw-laps-bar');
  const list=document.getElementById('sw-lap-list');
  if(!bar||!list)return;
  bar.className='sw-laps'+(swLaps.length?' has-laps':'');
  if(!swLaps.length){list.innerHTML='';return;}
  const min=Math.min(...swLaps),max=Math.max(...swLaps);
  list.innerHTML=swLaps.map((l,i)=>{
    const cls=swLaps.length>1?(l===min?' fastest':l===max?' slowest':''):'';
    return `<span class="sw-lap-item${cls}">L${i+1} ${swFmt(l)}</span>`;
  }).reverse().join('');
}
function stopRestTimer(){
  swReset();
}

// ════════════════════════════════════════════
// FINISH / SAVE WORKOUT
// ════════════════════════════════════════════
function openFinishModal(){
  swReset();
  const duration=Math.floor((Date.now()-activeWorkout.startTime)/1000);
  const vol=calcActiveVolume();
  const sets=countSets(activeWorkout);
  const prs=detectPRs(activeWorkout);
  const ml=document.getElementById('modal-layer');
  ml.innerHTML=`
  <div class="modal-bg open" id="finish-modal">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">Finish workout</div>
      <div class="stat-grid mb-12">
        <div class="stat-card"><div class="stat-num">${formatDuration(duration)}</div><div class="stat-label">Duration</div></div>
        <div class="stat-card"><div class="stat-num">${sets}</div><div class="stat-label">Total sets</div></div>
        <div class="stat-card"><div class="stat-num">${fmtVol(vol)}</div><div class="stat-label">Volume (${wUnit()})</div></div>
        <div class="stat-card"><div class="stat-num green">${prs.length}</div><div class="stat-label">New PRs</div></div>
      </div>
      ${prs.length?'<div style="margin-bottom:12px">'+prs.map(p=>`<div class="text-sm mb-4">🏆 <strong>${esc(p.name)}</strong>: ${p.label}</div>`).join('')+ '</div>':''}
      <div class="input-group mb-12">
        <label>Notes (optional)</label>
        <textarea id="finish-notes" rows="2" placeholder="How did it go?" style="resize:none"></textarea>
      </div>
      <div class="flex gap-8">
        <button class="btn flex-1" onclick="closeFinish()">Cancel</button>
        <button class="btn btn-primary flex-1" onclick="saveWorkout()">Save workout</button>
      </div>
    </div>
  </div>`;
}
function closeFinish(){document.getElementById('finish-modal').remove();}
function saveWorkout(){
  const duration=Math.floor((Date.now()-activeWorkout.startTime)/1000);
  const prs=detectPRs(activeWorkout);
  const notes=document.getElementById('finish-notes');
  workouts.push({
    id:Date.now(),
    name:activeWorkout.name||getDefaultWorkoutName(),
    date:new Date().toISOString(),
    duration,
    exercises:activeWorkout.exercises,
    notes:notes?notes.value:'',
    prs:prs.map(p=>p.name)
  });
  save();
  activeWorkout=null;
  clearInterval(timerInterval);timerInterval=null;
  closeFinish();
  nav('home');
}

// ════════════════════════════════════════════
// TEMPLATES
// ════════════════════════════════════════════
function openTemplateModal(){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  const ml=document.getElementById('modal-layer');
  ml.innerHTML=`
  <div class="modal-bg open" id="tmpl-modal">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">Save as template</div>
      <div class="input-group mb-12">
        <label>Template name</label>
        <input type="text" id="tmpl-name" placeholder="e.g. Push Day A" value="${esc(wo&&wo.name||'')}">
      </div>
      <div class="flex gap-8">
        <button class="btn flex-1" onclick="closeModalAnim('tmpl-modal')">Cancel</button>
        <button class="btn btn-primary flex-1" onclick="confirmSaveTemplate()">Save</button>
      </div>
    </div>
  </div>`;
}
function confirmSaveTemplate(){
  const name=document.getElementById('tmpl-name').value.trim();
  if(!name)return;
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  templates.push({name,exercises:wo.exercises.map(e=>({id:e.id,name:e.name,type:e.type,supersetId:e.supersetId,sets:[{}]}))});
  save();
  closeModalAnim('tmpl-modal');
}

// ════════════════════════════════════════════
// EXERCISE MODAL
// ════════════════════════════════════════════
let currentExType='strength';
let currentSessionCtx=null;
function openExModal(){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  currentSessionCtx=detectSessionContext(wo&&wo.name||'');
  const ml=document.getElementById('modal-layer');
  const ctxChip=currentSessionCtx?`<div class="ex-context-chip">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ${currentSessionCtx.label} day detected
  </div>`:'';
  ml.innerHTML=`
  <div class="modal-bg open" id="ex-modal" onclick="if(event.target===this)closeModalBg(this)">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">Add exercise</div>
      ${ctxChip}
      <div class="tabs" id="ex-type-tabs">
        <button class="tab active" onclick="setExTypeTab('strength')">Strength</button>
        <button class="tab" onclick="setExTypeTab('bodyweight')">Bodyweight</button>
        <button class="tab" onclick="setExTypeTab('cardio')">Cardio</button>
      </div>
      <div class="search-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search or type new…" id="ex-search" oninput="renderExList()">
      </div>
      <div id="ex-list" class="ex-pick-list"></div>

      <button class="btn w-full mt-8" id="ex-add-custom-btn" onclick="addCustomExercise()" style="display:none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span id="ex-add-btn-label">Add custom exercise</span>
      </button>
    </div>
  </div>`;
  currentExType='strength';
  openExStats=null;
  renderExList();
}
function setExTypeTab(type){
  currentExType=type;
  openExStats=null;
  document.querySelectorAll('#ex-type-tabs .tab').forEach(b=>b.classList.toggle('active',b.textContent.toLowerCase()===type));
  renderExList();
}
function makeExItem(name, type, suggested){
  const safeName=name.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
  const isOpen=openExStats===name;
  const brief=getExerciseBrief(name);
  const hasHistory=brief&&brief.sessionCount>0;

  let html=`<div class="ex-pick-wrap" id="expick-${safeName.replace(/[^a-z0-9]/gi,'_')}">
    <div class="ex-pick-item${suggested?' suggested':''}${isOpen?' stats-open':''}"
      onclick="selectExercise('${safeName}','${type}')">
      <div class="ex-pick-item-left">
        <span style="font-size:13px">${esc(name)}</span>
        ${hasHistory?`<span style="font-size:10px;color:var(--text3);font-family:var(--mono)">${brief.sessionCount}×</span>`:''}
      </div>
      <div class="ex-pick-item-right">
        <span class="tag tag-${type}" style="font-size:10px">${type}</span>
        <button class="ex-stats-btn${isOpen?' open':''}"
          onclick="event.stopPropagation();toggleExStats('${safeName}','${type}')"
          title="Stats">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
    </div>`;

  if(isOpen){
    html+=renderExStatsCard(name);
  }

  html+='</div>';
  return html;
}

function renderExStatsCard(name){
  const brief=getExerciseBrief(name);
  const customMeta=getCustomExMeta(name);
  let html=`<div class="ex-stats-card">
    <div class="ex-stats-card-title">Stats for ${esc(name)}</div>`;

  // Custom exercise metadata tags
  if(customMeta){
    const tags=[];
    if(customMeta.muscles&&customMeta.muscles.length) tags.push(...customMeta.muscles.map(m=>`<span class="ex-stats-meta-tag">${m}</span>`));
    if(customMeta.equipment) tags.push(`<span class="ex-stats-meta-tag">${customMeta.equipment}</span>`);
    if(customMeta.pattern) tags.push(`<span class="ex-stats-meta-tag">${customMeta.pattern}</span>`);
    if(tags.length) html+=`<div class="ex-stats-meta-tags">${tags.join('')}</div>`;
  }

  if(!brief){
    html+=`<div class="ex-stats-no-data">No history yet — this will be your first session.</div>`;
  } else {
    html+=`<div class="ex-stats-row">
      <span class="ex-stats-row-label">Sessions logged</span>
      <span class="ex-stats-row-val">${brief.sessionCount}</span>
    </div>`;
    if(brief.bestSet){
      html+=`<div class="ex-stats-row">
        <span class="ex-stats-row-label">Last session (${brief.lastDate})</span>
        <span class="ex-stats-row-val">${fmtW(brief.bestSet.weight)} ${wUnit()} × ${brief.bestSet.reps}</span>
      </div>`;
    }
    if(brief.pr){
      html+=`<div class="ex-stats-row">
        <span class="ex-stats-row-label">All-time best</span>
        <span class="ex-stats-row-val">${fmtW(brief.pr.weight)} ${wUnit()} × ${brief.pr.reps}</span>
      </div>`;
      const orm=ormEpley(brief.pr.weight,brief.pr.reps);
      if(orm){
        html+=`<div class="ex-stats-row">
          <span class="ex-stats-row-label">Est. 1RM</span>
          <span class="ex-stats-row-val" style="color:var(--accent2)">${fmtW(Math.round(orm))} ${wUnit()}</span>
        </div>`;
      }
    }
    // Rep-range PR lookup
    html+=`<div class="ex-stats-reps-wrap">
      <div class="ex-stats-reps-label">Rep-range PR lookup</div>
      <input type="number" class="ex-stats-reps-input w-full" min="1" max="50" placeholder="Enter reps to find PR…"
        oninput="lookupRepRangePR('${name.replace(/'/g,"\'")}',this.value,this)"
        onclick="event.stopPropagation()">
      <div class="ex-stats-pr-flash" id="exprflash-${name.replace(/[^a-z0-9]/gi,'_')}"></div>
    </div>`;
  }

  html+=`</div>`;
  return html;
}

function toggleExStats(name, type){
  openExStats = openExStats===name ? null : name;
  selectedExBrief = name;
  renderExList();
  // Scroll the newly opened card into view
  if(openExStats){
    requestAnimationFrame(()=>{
      const id='expick-'+name.replace(/[^a-z0-9]/gi,'_');
      const el=document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
  }
}

function lookupRepRangePR(name, val, inputEl){
  if(event)event.stopPropagation();
  const reps=parseInt(val);
  // Find the flash el closest to the input (handles both picker and in-block)
  const flash=inputEl?inputEl.nextElementSibling:null;
  if(!flash){ return; }
  if(!reps||reps<1){ flash.style.display='none'; return; }
  const pr=getPrForRepRange(name,reps);
  if(!pr){ flash.style.display='none'; return; }
  flash.style.display='block';
  flash.innerHTML=`${pr.range} PR: <strong>${fmtW(pr.weight)} ${wUnit()} × ${pr.reps}</strong>${pr.rpe?' <span style="color:var(--text3)">@'+pr.rpe.replace('max_effort','MAX').replace('challenging','HARD')+'</span>':''}`;
}

function renderExList(){
  const rawQ=(document.getElementById('ex-search')||{}).value||'';
  const q=rawQ.toLowerCase().trim();
  const container=document.getElementById('ex-list');
  if(!container)return;

  // When searching, flat list across all types
  if(q.length>=1){
    const allStr=allExercises('strength');
    const allBw=allExercises('bodyweight');
    const allCar=allExercises('cardio');
    const results=[];
    [...allStr.map(n=>({n,t:'strength'})),...allBw.map(n=>({n,t:'bodyweight'})),...allCar.map(n=>({n,t:'cardio'}))]
      .filter(({n})=>n.toLowerCase().includes(q))
      .forEach(({n,t})=>results.push(makeExItem(n,t,false)));
    const addBtn=document.getElementById('ex-add-custom-btn');
    const addLabel=document.getElementById('ex-add-btn-label');
    if(addBtn){
      addBtn.style.display='flex';
      if(addLabel) addLabel.textContent=`Add "${rawQ}" as new exercise`;
    }
    container.innerHTML=results.length?results.join(''):`<div style="padding:12px;color:var(--text3);font-size:13px;text-align:center">Not found — tap below to add it</div>`;
    return;
  }

  const addBtnEl=document.getElementById('ex-add-custom-btn');
  if(addBtnEl) addBtnEl.style.display='none';

  const full=allExercises(currentExType);
  const suggested=currentSessionCtx?getSuggestedExercises(currentSessionCtx,currentExType):[];
  const suggestedSet=new Set(suggested);

  let html='';
  if(suggested.length){
    html+=`<div class="ex-context-label">Suggested for ${esc(currentSessionCtx.label)}</div>`;
    html+=suggested.filter(n=>full.includes(n)).map(n=>makeExItem(n,currentExType,true)).join('');
    if(full.filter(n=>!suggestedSet.has(n)).length){
      html+='<hr class="ex-divider">';
      html+=`<div class="ex-context-label">All exercises</div>`;
    }
  }
  html+=full.filter(n=>!suggestedSet.has(n)).map(n=>makeExItem(n,currentExType,false)).join('');
  container.innerHTML=html;
}

function showExBrief(name){ /* legacy stub — now handled by toggleExStats */
  selectedExBrief=name;
  const q='';
  const panel=document.getElementById('ex-brief-panel');
  const repsHint=document.getElementById('ex-reps-hint');
  const prFlash=document.getElementById('ex-pr-flash');
  if(!panel)return;
  const brief=getExerciseBrief(name);
  if(!brief){
    panel.className='ex-brief';
    if(repsHint)repsHint.style.display='none';
    return;
  }
  panel.className='ex-brief visible';
  const customMeta=getCustomExMeta(name);
  let html=`<div class="ex-brief-title">✦ ${esc(name)}</div>`;
  if(customMeta){
    const tagStyle='display:inline-block;font-size:10px;padding:1px 6px;border-radius:100px;background:var(--bg4);border:1px solid var(--border2);color:var(--text2);margin:1px';
    const tags=[];
    if(customMeta.muscles&&customMeta.muscles.length) tags.push(...customMeta.muscles.map(m=>`<span style="${tagStyle}">${m}</span>`));
    if(customMeta.equipment) tags.push(`<span style="${tagStyle}">${customMeta.equipment}</span>`);
    if(customMeta.pattern) tags.push(`<span style="${tagStyle}">${customMeta.pattern}</span>`);
    if(tags.length) html+=`<div style="margin-bottom:6px;display:flex;flex-wrap:wrap;gap:3px">${tags.join('')}</div>`;
  }
  html+=`<div class="ex-brief-row"><span>Sessions logged</span><span>${brief.sessionCount}</span></div>`;
  if(brief.bestSet){
    html+=`<div class="ex-brief-row"><span>Last session (${brief.lastDate})</span><span>${fmtW(brief.bestSet.weight)} ${wUnit()} × ${brief.bestSet.reps}</span></div>`;
  }
  if(brief.pr){
    html+=`<div class="ex-brief-row"><span>All-time best set</span><span>${fmtW(brief.pr.weight)} ${wUnit()} × ${brief.pr.reps}</span></div>`;
    const orm=ormEpley(brief.pr.weight,brief.pr.reps);
    if(orm)html+=`<div class="ex-brief-row"><span>Est. 1RM</span><span>${fmtW(Math.round(orm))} ${wUnit()}</span></div>`;
  }
  panel.innerHTML=html;
  if(repsHint)repsHint.style.display='block';
  if(prFlash)prFlash.style.display='none';
  const inp=document.getElementById('ex-reps-input');
  if(inp)inp.value='';
}

// updateExBriefReps replaced by lookupRepRangePR (inline per-row)

// Custom exercise categorisation state
let _pendingCustomName = '';
let _customCat = { muscles:[], pattern:'', equipment:'', type:'' };

function addCustomExercise(){
  const q=(document.getElementById('ex-search')||{}).value?.trim();
  if(!q) return;
  // Check if already exists (built-in or custom)
  const allNames=['strength','bodyweight','cardio'].flatMap(t=>allExercises(t));
  if(allNames.map(n=>n.toLowerCase()).includes(q.toLowerCase())){
    // Already exists — just add it
    const type=['strength','bodyweight','cardio'].find(t=>allExercises(t).map(n=>n.toLowerCase()).includes(q.toLowerCase()))||currentExType;
    selectExercise(q,type); return;
  }
  _pendingCustomName = q;
  _customCat = { muscles:[], pattern:'', equipment:'', type:currentExType };
  showCustomCatModal();
}

function showCustomCatModal(){
  const name = _pendingCustomName;
  const cat = _customCat;

  const muscleOpts=['chest','back','shoulders','biceps','triceps','quads','hamstrings','glutes','calves','abs','full body'];
  const patternOpts=['Push','Pull','Hinge','Squat','Carry','Isolation','Cardio'];
  const equipOpts=['Barbell','Dumbbell','Cable','Machine','Bodyweight','Kettlebell','Band','Other'];
  const typeOpts=['strength','bodyweight','cardio'];

  function chips(opts, field, multi){
    return opts.map(opt=>{
      const val=opt.toLowerCase().replace(' ','_');
      const isSelected=multi?(cat[field]||[]).includes(val):cat[field]===val;
      return `<span class="cat-chip${multi?' multi':''}${isSelected?' selected':''}"
        onclick="catSelect('${field}','${val}',${multi})">${opt}</span>`;
    }).join('');
  }

  const canSave = cat.muscles.length>0 && cat.pattern && cat.equipment;

  const ml = document.getElementById('modal-layer');
  ml.innerHTML = `
  <div class="modal-bg open" id="catex-modal" onclick="if(event.target===this)closeModalBg(this)">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">New exercise</div>
      <div class="custom-ex-name">${esc(name)}</div>

      <div class="cat-section">
        <div class="cat-label">Muscle group(s) <span style="color:var(--red)">*</span></div>
        <div class="cat-chips">${chips(muscleOpts,'muscles',true)}</div>
      </div>

      <div class="cat-section">
        <div class="cat-label">Movement pattern <span style="color:var(--red)">*</span></div>
        <div class="cat-chips">${chips(patternOpts,'pattern',false)}</div>
      </div>

      <div class="cat-section">
        <div class="cat-label">Equipment <span style="color:var(--red)">*</span></div>
        <div class="cat-chips">${chips(equipOpts,'equipment',false)}</div>
      </div>

      <div class="cat-section">
        <div class="cat-label">Type</div>
        <div class="cat-chips">${chips(typeOpts,'type',false)}</div>
      </div>

      <div class="flex gap-8 mt-4">
        <button class="btn flex-1" onclick="closeModalAnim('catex-modal')">Cancel</button>
        <button class="btn btn-primary flex-1" ${canSave?'':'disabled style="opacity:.4;pointer-events:none"'}
          onclick="saveCustomExercise()">Add exercise</button>
      </div>
    </div>
  </div>`;
}

function catSelect(field, val, multi){
  if(multi){
    if(!_customCat[field]) _customCat[field]=[];
    const idx=_customCat[field].indexOf(val);
    if(idx>-1) _customCat[field].splice(idx,1);
    else _customCat[field].push(val);
  } else {
    _customCat[field]=val;
  }
  showCustomCatModal();
}

function saveCustomExercise(){
  const name = _pendingCustomName;
  const cat = _customCat;
  if(!cat.muscles.length||!cat.pattern||!cat.equipment) return;
  const type = cat.type||'strength';
  const meta = { name, type, muscles:cat.muscles, pattern:cat.pattern, equipment:cat.equipment };
  if(!customExercises[type]) customExercises[type]=[];
  // Don't double-add
  const exists=(customExercises[type]||[]).some(e=>(typeof e==='string'?e:e.name)===name);
  if(!exists) customExercises[type].push(meta);
  registerCustomExInMaps(meta);
  save();
  const modal = document.getElementById('catex-modal');
  if(modal) modal.remove();
  selectExercise(name, type);
}
function selectExercise(name,type){
  const wo=editingWorkout?editingWorkout.workout:activeWorkout;
  if(!wo)return;
  wo.exercises.push({id:Date.now(),name,type,sets:[{}]});
  const modal=document.getElementById('ex-modal');
  if(modal)modal.remove();
  renderLog(document.getElementById('main'),document.getElementById('topbar-right'));
}

// ════════════════════════════════════════════
// DATA CALCULATIONS
// ════════════════════════════════════════════

// ── Estimate workout duration from set count (for historical data) ──
// Average ~2.5 min per set including rest
function estimateDuration(w){
  if(w.duration&&w.duration>60) return w.duration;
  const sets=countSets(w);
  return sets*150; // 2.5 min per set in seconds
}

function calcVolume(w){
  return w.exercises.reduce((tot,ex)=>{
    return tot+ex.sets.reduce((s,set)=>{
      if(ex.type==='cardio')return s+(parseFloat(set.dist)||0)*10;
      return s+(parseFloat(set.reps)||0)*(parseFloat(set.weight)||0);
    },0);
  },0);
}
function calcActiveVolume(){return activeWorkout?calcVolume(activeWorkout):0;}
function countSets(w){
  return w.exercises.reduce((s,e)=>s+e.sets.filter(set=>{
    if(e.type==='cardio')return set.dist||set.duration;
    return set.reps;
  }).length,0);
}

function formatDuration(s){
  const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60;
  if(h>0)return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  return `${m}:${String(sec).padStart(2,'0')}`;
}
function getThisWeekWorkouts(){
  const now=new Date(),monday=new Date(now);
  monday.setDate(now.getDate()-(now.getDay()||7)+1);monday.setHours(0,0,0,0);
  return workouts.filter(w=>new Date(w.date)>=monday);
}
function calcStreak(){
  if(!workouts.length)return 0;
  const days=new Set(workouts.map(w=>new Date(w.date).toDateString()));
  let streak=0,d=new Date();
  while(streak<365){
    if(days.has(d.toDateString()))streak++;
    else{const yd=new Date(d);yd.setDate(d.getDate()-1);if(!days.has(yd.toDateString()))break;}
    d.setDate(d.getDate()-1);
  }
  return streak;
}
function countRecentPRs(days){
  const cutoff=Date.now()-days*86400000;
  return workouts.filter(w=>new Date(w.date)>=cutoff&&w.prs&&w.prs.length).reduce((s,w)=>s+w.prs.length,0);
}
function getExercisePR(name){
  let pr=null;
  workouts.forEach(w=>{
    w.exercises.filter(e=>e.name===name).forEach(ex=>{
      ex.sets.forEach(s=>{
        const w2=parseFloat(s.weight)||0,r=parseFloat(s.reps)||0;
        if(r>0&&(!pr||w2*r>pr.weight*pr.reps))pr={weight:w2,reps:r};
      });
    });
  });
  return pr;
}
function prLabel(ex,pr){
  if(ex.type==='cardio')return '';
  return `${pr.reps}×${fmtW(pr.weight)} ${wUnit()}`;
}
function detectPRs(workout){
  const prs=[];
  workout.exercises.forEach(ex=>{
    if(ex.type==='cardio')return;
    const histPR=getExercisePR(ex.name);
    let sessionBest=null;
    ex.sets.forEach(s=>{
      const w=parseFloat(s.weight)||0,r=parseFloat(s.reps)||0;
      if(r>0&&(!sessionBest||w*r>sessionBest.weight*sessionBest.reps))sessionBest={weight:w,reps:r};
    });
    if(sessionBest&&(!histPR||sessionBest.weight*sessionBest.reps>histPR.weight*histPR.reps))
      prs.push({name:ex.name,label:`${sessionBest.reps}×${fmtW(sessionBest.weight)} ${wUnit()}`});
  });
  return prs;
}
function getAllPRs(){
  const best={};
  workouts.forEach(w=>{
    w.exercises.forEach(ex=>{
      if(ex.type==='cardio')return;
      ex.sets.forEach(s=>{
        const wt=parseFloat(s.weight)||0,r=parseFloat(s.reps)||0;
        if(!r)return;
        const score=wt*r;
        if(!best[ex.name]||score>best[ex.name].score)
          best[ex.name]={name:ex.name,score,weight:wt,reps:r,date:w.date,label:`${r}×${fmtW(wt)} ${wUnit()}`};
      });
    });
  });
  return Object.values(best).sort((a,b)=>new Date(b.date)-new Date(a.date));
}
function getExerciseHistory(name){
  return workouts.filter(w=>w.exercises.some(e=>e.name===name)).map(w=>({date:w.date,sets:w.exercises.find(e=>e.name===name).sets}));
}
function getExercisesWithHistory(){
  const names=new Set();
  workouts.forEach(w=>w.exercises.forEach(e=>{if(e.type!=='cardio')names.add(e.name);}));
  return[...names];
}
function getExerciseProgressData(name){
  const sessions=[];
  workouts.forEach(w=>{
    const ex=w.exercises.find(e=>e.name===name);
    if(!ex)return;
    let maxW=0,maxR=0;
    ex.sets.forEach(s=>{maxW=Math.max(maxW,parseFloat(s.weight)||0);maxR=Math.max(maxR,parseFloat(s.reps)||0);});
    sessions.push({date:new Date(w.date).toISOString().slice(5,10),weight:dispW(maxW)||0,reps:maxR});
  });
  sessions.sort((a,b)=>a.date.localeCompare(b.date));
  return{labels:sessions.map(s=>s.date),weights:sessions.map(s=>s.weight),reps:sessions.map(s=>s.reps)};
}
function getWeeklyVolumeData(){
  const weeks={};
  workouts.forEach(w=>{
    const d=new Date(w.date),monday=new Date(d);
    monday.setDate(d.getDate()-(d.getDay()||7)+1);monday.setHours(0,0,0,0);
    const key=monday.toISOString().slice(0,10);
    weeks[key]=(weeks[key]||0)+calcVolume(w);
  });
  const keys=Object.keys(weeks).sort().slice(-8);
  return{labels:keys.map(k=>k.slice(5)),data:keys.map(k=>Math.round(getUnit()==='lbs'?weeks[k]*2.20462:weeks[k]))};
}
function getWeeklyFreqData(){
  const weeks={};
  workouts.forEach(w=>{
    const d=new Date(w.date),monday=new Date(d);
    monday.setDate(d.getDate()-(d.getDay()||7)+1);monday.setHours(0,0,0,0);
    const key=monday.toISOString().slice(0,10);
    weeks[key]=(weeks[key]||0)+1;
  });
  const keys=Object.keys(weeks).sort().slice(-8);
  return{labels:keys.map(k=>k.slice(5)),data:keys.map(k=>weeks[k])};
}
function getDefaultWorkoutName(){
  const h=new Date().getHours();
  return h<12?'Morning workout':h<17?'Afternoon workout':'Evening workout';
}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}


// ════════════════════════════════════════════
// PR DEEP-DIVE
// ════════════════════════════════════════════
const RPE_LABELS = {easy:'Easy',moderate:'Moderate',challenging:'Challenging',max_effort:'Max effort'};
const REP_RANGES = [
  {label:'1 RM',  key:'r1',  min:1, max:1},
  {label:'3 RM',  key:'r3',  min:2, max:3},
  {label:'5 RM',  key:'r5',  min:4, max:5},
  {label:'8 RM',  key:'r8',  min:6, max:8},
  {label:'10 RM', key:'r10', min:9, max:10},
  {label:'12+ RM',key:'r12', min:11,max:999},
];

function ormEpley(weight, reps){
  if(!weight||!reps)return null;
  if(reps===1)return weight;
  return weight*(1+reps/30);
}

function getAllPrsByRepRange(exName){
  const bests = {};
  REP_RANGES.forEach(r=>{ bests[r.key]=null; });
  workouts.forEach(w=>{
    w.exercises.filter(e=>e.name===exName).forEach(ex=>{
      ex.sets.forEach(s=>{
        const wt=parseFloat(s.weight)||0, r=parseFloat(s.reps)||0;
        if(!r||!wt)return;
        REP_RANGES.forEach(range=>{
          if(r>=range.min&&r<=range.max){
            const cur=bests[range.key];
            if(!cur||wt>cur.weight||(wt===cur.weight&&r>cur.reps)){
              bests[range.key]={weight:wt,reps:r,rpe:s.rpe||null,date:w.date};
            }
          }
        });
      });
    });
  });
  return bests;
}

function renderPrDeepDive(exName){
  const bests = getAllPrsByRepRange(exName);

  // Estimated 1RM — pick the best Epley estimate across all rep ranges
  let bestOrm = null;
  REP_RANGES.forEach(range=>{
    const b=bests[range.key];
    if(!b)return;
    const est=ormEpley(b.weight,b.reps);
    if(est&&(!bestOrm||est>bestOrm.value))
      bestOrm={value:est,weight:b.weight,reps:b.reps};
  });

  let html='';

  // Estimated 1RM card
  if(bestOrm){
    html+=`<div class="orm-card">
      <div class="orm-label">Estimated 1 rep max (Epley formula)</div>
      <div class="orm-value">${fmtW(bestOrm.value)} <span style="font-size:14px;font-weight:400;color:var(--accent2);opacity:.7">${wUnit()}</span></div>
      <div style="font-size:11px;color:var(--accent2);opacity:.6;margin-top:4px">Based on ${bestOrm.reps}×${fmtW(bestOrm.weight)} ${wUnit()}</div>
      <div id="ai-insight-box">${renderAiInsightBox(exName)}</div>
    </div>`;
  }

  // Per-rep-range PR grid
  html+='<div class="pr-rep-grid">';
  REP_RANGES.forEach(range=>{
    const b=bests[range.key];
    const dateStr=b?new Date(b.date).toLocaleDateString('en-CA',{month:'short',day:'numeric',year:'numeric'}):'—';
    const rpeClass=b&&b.rpe?'rpe-'+b.rpe:'';
    const rpeText=b&&b.rpe?RPE_LABELS[b.rpe]||b.rpe:'';
    html+=`<div class="pr-rep-card">
      <div class="pr-rep-label">${range.label}</div>
      ${b
        ? `<div class="pr-rep-weight">${fmtW(b.weight)} <span style="font-size:12px;font-weight:400;color:var(--text2)">${wUnit()}</span></div>
           <div class="pr-rep-sub">${b.reps} rep${b.reps!==1?'s':''} · ${dateStr}</div>
           ${rpeText?`<div class="pr-rep-rpe ${rpeClass}">${rpeText}</div>`:''}`
        : `<div style="color:var(--text3);font-size:13px;font-family:var(--mono);margin-top:4px">No data</div>`
      }
    </div>`;
  });
  html+='</div>';

  return html;
}

function renderAiInsightBox(exName){
  if(prAiLoading){
    return `<div class="ai-insight"><div class="ai-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div>`;
  }
  const cached=DB.get('ai_pr_insight_'+currentUser+'_'+exName,null);
  if(cached){
    return `<div class="ai-insight">${cached}</div>`;
  }
  return `<button class="btn btn-sm mt-8" style="background:var(--accent-bg);border-color:var(--accent);color:var(--accent2)" onclick="fetchPrAiInsight('${exName.replace(/'/g,"\'")}')">✦ AI insight</button>`;
}

async function fetchPrAiInsight(exName){
  prAiLoading=true;
  // Re-render just the insight box optimistically
  const box=document.getElementById('ai-insight-box');
  if(box)box.innerHTML=renderAiInsightBox(exName);

  const bests=getAllPrsByRepRange(exName);
  const lines=REP_RANGES.map(r=>{
    const b=bests[r.key];
    if(!b)return null;
    return `${r.label}: ${b.reps}×${fmtW(b.weight)}${wUnit()} (${b.rpe||'no RPE'}, ${new Date(b.date).toLocaleDateString('en-CA',{month:'short',day:'numeric',year:'numeric'})})`;
  }).filter(Boolean);

  const prompt=`You are a strength coach. Here are ${currentUser}'s personal records for "${exName}":\n${lines.join('\n')}\n\nIn 2-3 sentences: comment on their strength across rep ranges, note anything interesting about the RPE ratings, and give one specific actionable coaching tip. Be direct and data-driven. No fluff.`;

  try {
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:200,
        messages:[{role:'user',content:prompt}]
      })
    });
    const data=await res.json();
    const text=data.content&&data.content[0]&&data.content[0].text;
    if(text){
      // Bold any numbers or exercise names
      const formatted=text.replace(/\b(\d+\.?\d*\s*(kg|lbs|reps?|sets?))/gi,'<strong>$1</strong>');
      DB.set('ai_pr_insight_'+currentUser+'_'+exName,formatted);
      prAiLoading=false;
      const b2=document.getElementById('ai-insight-box');
      if(b2)b2.innerHTML=`<div class="ai-insight">${formatted}</div>`;
    }
  } catch(e){
    prAiLoading=false;
    const b2=document.getElementById('ai-insight-box');
    if(b2)b2.innerHTML=`<div class="ai-insight" style="color:var(--red)">Could not load AI insight.</div>`;
  }
}



// ════════════════════════════════════════════
// COACHING ENGINE
// ════════════════════════════════════════════

// ── Fatigue / overload flags (heuristic, no API) ──
function getFatigueFlags(){
  const flags = [];
  if(workouts.length < 3) return flags;

  // Get exercises logged in the last 3 weeks
  const cutoff = Date.now() - 21*86400000;
  const recentWos = workouts.filter(w => new Date(w.date) >= cutoff);
  const exNames = new Set();
  recentWos.forEach(w => w.exercises.forEach(e => { if(e.type !== 'cardio') exNames.add(e.name); }));

  exNames.forEach(name => {
    const sessions = [];
    recentWos.forEach(w => {
      const ex = w.exercises.find(e => e.name === name);
      if(!ex) return;
      const sets = ex.sets.filter(s => s.reps && s.weight);
      if(!sets.length) return;
      const avgRpe = sets.filter(s=>s.rpe).map(s=>({easy:1,moderate:2,challenging:3,max_effort:4}[s.rpe]||0)).reduce((a,b)=>a+b,0) / (sets.filter(s=>s.rpe).length||1);
      const maxW = Math.max(...sets.map(s=>parseFloat(s.weight)||0));
      sessions.push({ date: w.date, maxW, avgRpe });
    });
    if(sessions.length < 2) return;

    const last = sessions[sessions.length-1];
    const prev = sessions[sessions.length-2];

    // Stalling: RPE up, weight same or down for 3+ sessions
    if(sessions.length >= 3){
      const last3 = sessions.slice(-3);
      const rpes = last3.map(s=>s.avgRpe).filter(r=>r>0);
      const weights = last3.map(s=>s.maxW);
      const rpeUp = rpes.length >= 2 && rpes[rpes.length-1] > rpes[0] + 0.5;
      const weightFlat = weights[weights.length-1] <= weights[0];
      if(rpeUp && weightFlat) {
        flags.push({ type:'warn', text:`<strong>${esc(name)}</strong> — effort trending up without weight progress over 3 sessions. Consider a deload or technique check.` });
      }
    }

    // PR approaching: weight up, RPE still moderate
    if(last.maxW > prev.maxW * 1.03 && last.avgRpe <= 2.5 && last.avgRpe > 0){
      flags.push({ type:'good', text:`<strong>${esc(name)}</strong> — weight up ${fmtW(last.maxW - prev.maxW)} ${wUnit()} and still feeling manageable. Good time to push for a PR.` });
    }
  });

  // Volume drop flag
  const thisWeek = getThisWeekWorkouts();
  const lastWeek = workouts.filter(w=>{
    const d = new Date(w.date), now = new Date();
    const monday = new Date(now); monday.setDate(now.getDate()-(now.getDay()||7)+1); monday.setHours(0,0,0,0);
    const prevMonday = new Date(monday); prevMonday.setDate(monday.getDate()-7);
    return d >= prevMonday && d < monday;
  });
  const thisVol = thisWeek.reduce((s,w)=>s+calcVolume(w),0);
  const lastVol = lastWeek.reduce((s,w)=>s+calcVolume(w),0);
  if(lastVol > 0 && thisVol < lastVol * 0.5 && new Date().getDay() >= 4){
    flags.push({ type:'warn', text:`<strong>Volume down ${Math.round((1-thisVol/lastVol)*100)}%</strong> this week vs last. ${thisWeek.length} session${thisWeek.length!==1?'s':''} so far.` });
  }

  return flags.slice(0, 4);
}

// ── Split analysis ──
function analyzeSplit(){
  if(workouts.length < 4) return null;
  const recent = workouts.slice(-12);
  const muscleDays = {};
  recent.forEach(w => {
    const muscles = new Set();
    w.exercises.forEach(ex => {
      (MUSCLE_MAP[ex.name]||[]).forEach(m => muscles.add(m));
    });
    const key = [...muscles].sort().join(',');
    muscleDays[key] = (muscleDays[key]||0)+1;
  });

  // Infer split type from muscle combos
  const hasLeg = recent.some(w => w.exercises.some(e => (MUSCLE_MAP[e.name]||[]).includes('quads')));
  const hasPush = recent.some(w => w.exercises.some(e => (MUSCLE_MAP[e.name]||[]).includes('chest')));
  const hasPull = recent.some(w => w.exercises.some(e => (MUSCLE_MAP[e.name]||[]).includes('back')));

  // Count unique muscle groups hit per workout
  const muscleCounts = recent.map(w => {
    const m = new Set();
    w.exercises.forEach(ex => (MUSCLE_MAP[ex.name]||[]).forEach(g=>m.add(g)));
    return m.size;
  });
  const avgMusclePer = muscleCounts.reduce((a,b)=>a+b,0)/muscleCounts.length;

  let splitName, balance;
  if(avgMusclePer >= 5) { splitName='Full Body'; balance='You hit most muscle groups each session.'; }
  else if(hasPush && hasPull && hasLeg) { splitName='Push / Pull / Legs'; balance='Good split structure — ensure each category gets ~equal frequency.'; }
  else if(hasPush && hasPull) { splitName='Upper / Lower or PPL'; balance='Leg training appears infrequent — watch lower body volume.'; }
  else { splitName='Bro Split'; balance='Muscle-isolated focus. Check weekly frequency per group is at least 2×.'; }

  // Frequency per muscle last 4 weeks
  const vol = getMuscleVolumeLast4Weeks();
  const neglected = Object.entries(vol).filter(([m,v])=>v<4&&['chest','back','quads','hamstrings'].includes(m)).map(([m])=>m);

  return { splitName, balance, neglected };
}

// ── Next session recommendation ──
function getNextSessionRecommendation(){
  if(workouts.length < 2) return null;
  const vol = getMuscleVolumeLast4Weeks();
  const today = new Date();

  // Find which muscles were last trained and how long ago
  const muscleLastTrained = {};
  [...workouts].reverse().forEach(w => {
    const daysAgo = Math.floor((today - new Date(w.date)) / 86400000);
    w.exercises.forEach(ex => {
      (MUSCLE_MAP[ex.name]||[]).forEach(m => {
        if(muscleLastTrained[m] === undefined) muscleLastTrained[m] = daysAgo;
      });
    });
  });

  // Priority: muscles not trained in 4+ days with lower volume
  const candidates = Object.entries(muscleLastTrained)
    .filter(([m, days]) => days >= 3)
    .sort((a, b) => {
      // Sort by: days since trained (more = higher priority) weighted by volume deficit
      const aScore = a[1] + (8 - Math.min(vol[a[0]]||0, 8));
      const bScore = b[1] + (8 - Math.min(vol[b[0]]||0, 8));
      return bScore - aScore;
    })
    .slice(0, 3)
    .map(([m]) => m);

  if(!candidates.length) return null;

  // Map muscles to a session name
  const sessionMap = {
    chest: 'Push', back: 'Pull', shoulders: 'Push',
    biceps: 'Pull', triceps: 'Push', quads: 'Legs',
    hamstrings: 'Legs', glutes: 'Legs', calves: 'Legs', abs: 'Core'
  };
  const sessionTypes = [...new Set(candidates.map(m => sessionMap[m]||'Compound'))];
  const sessionLabel = sessionTypes.join(' / ');

  // Find most recent workout using those muscles for suggested exercises
  const suggestedExercises = [];
  [...workouts].reverse().forEach(w => {
    if(suggestedExercises.length >= 4) return;
    w.exercises.forEach(ex => {
      if(suggestedExercises.length >= 4) return;
      const exMuscles = MUSCLE_MAP[ex.name]||[];
      if(candidates.some(m => exMuscles.includes(m)) && !suggestedExercises.includes(ex.name)){
        suggestedExercises.push(ex.name);
      }
    });
  });

  return { candidates, sessionLabel, suggestedExercises,
    daysRest: Math.min(...candidates.map(m => muscleLastTrained[m]||0)) };
}

// ── AI Weekly Debrief ──
function getDebriefCacheKey(){
  const now = new Date();
  const week = Math.floor(now.getTime() / (7*86400000));
  return `debrief_${currentUser}_${week}`;
}

function renderWeeklyDebrief(){
  const cached = DB.get(getDebriefCacheKey(), null);
  if(coachDebriefLoading){
    return `<div class="coach-panel">
      <div class="coach-panel-title">✦ Weekly coaching brief <button onclick="coachDebriefLoading=false;render()">✕</button></div>
      <div class="ai-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div>
    </div>`;
  }
  if(cached){
    return `<div class="coach-panel">
      <div class="coach-panel-title">✦ Weekly coaching brief <button onclick="DB.set('${getDebriefCacheKey()}',null);render()">↺ Refresh</button></div>
      <div class="coach-line">${cached}</div>
    </div>`;
  }
  return `<div class="coach-panel">
    <div class="coach-panel-title">✦ Weekly coaching brief</div>
    <div class="coach-line" style="color:var(--text3);font-size:12px">AI-powered summary of your week, progress patterns, and what to focus on next.</div>
    <button class="btn btn-sm mt-8" style="background:var(--accent-bg);border-color:var(--accent);color:var(--accent2)" onclick="fetchWeeklyDebrief()">Generate brief</button>
  </div>`;
}

async function fetchWeeklyDebrief(){
  coachDebriefLoading = true;
  render();
  const thisWeek = getThisWeekWorkouts();
  const vol = getMuscleVolumeLast4Weeks();
  const flags = getFatigueFlags();
  const split = analyzeSplit();
  const next = getNextSessionRecommendation();
  const allPRs = getAllPRs().slice(0,3);

  const weekSummary = thisWeek.length
    ? thisWeek.map(w=>`${w.name} (${new Date(w.date).toLocaleDateString('en-CA',{weekday:'short'})}): ${w.exercises.map(e=>e.name).join(', ')}`).join('\n')
    : 'No workouts this week yet.';

  const muscleVolSummary = Object.entries(vol).map(([m,v])=>`${m}: ${v} sets`).join(', ');
  const flagSummary = flags.map(f=>f.text.replace(/<[^>]+>/g,'')).join('; ');
  const prSummary = allPRs.map(p=>`${p.name}: ${p.label}`).join(', ');

  const prompt = `You are a personal strength coach giving ${currentUser} their weekly training debrief. Be direct, specific, and encouraging. No generic advice.

This week's sessions:
${weekSummary}

Muscle group volume last 4 weeks: ${muscleVolSummary}
Detected split: ${split?split.splitName:'Unknown'}
Recent PRs: ${prSummary||'None this week'}
Flags: ${flagSummary||'None'}
Next recommended session: ${next?next.sessionLabel:'Rest day'}

Write a 3-4 sentence coaching debrief covering: (1) what they did well this week, (2) one specific pattern you notice in their data, (3) one concrete priority for next week. Be a real coach, not a chatbot. Use their actual exercise names.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:300,
        messages:[{role:'user',content:prompt}]
      })
    });
    const data = await res.json();
    const text = data.content&&data.content[0]&&data.content[0].text;
    if(text){
      DB.set(getDebriefCacheKey(), text);
    }
  } catch(e){ console.error('Debrief error',e); }
  coachDebriefLoading = false;
  render();
}

// ════════════════════════════════════════════
// MUSCLE MAP
// ════════════════════════════════════════════
const MUSCLE_MAP = {
  // Chest
  'Barbell Bench Press':['chest'],'Bench Press (Dumbell)':['chest'],'Incline Dumbbell Bench Press':['chest'],
  'Incline Barbell Bench Press':['chest'],'Decline Bench Press':['chest'],'Guillotine Dumbbell Bench Press':['chest'],
  'Hex Press':['chest'],'Machine Press (weight loaded)':['chest'],'Incline Bench Press (Smith Machine)':['chest'],
  'Dumbbell bench flyes':['chest'],'Cable Flyes (Chest Height)':['chest'],'Cable Flyes (High to Low)':['chest'],
  'Cable Flyes (low to high)':['chest'],'Machine Fly':['chest'],'Machine Flyes':['chest'],
  'Bench Press Machine':['chest'],'Close Grip Bench Press':['chest','triceps'],
  'Incline Benchpress':['chest'],'Incline Dumbbell Bench Press Machine':['chest'],
  'Ground & Pound (single arm)':['chest'],
  // Back
  'Barbell Deadlift':['back','glutes'],'Deadlift':['back','glutes'],'Smith Machine Deadlift':['back','glutes'],
  'Barbell Row':['back'],'Smith Machine Barbell Row':['back'],'T-Bar Row':['back'],
  'V-Grip Cable row':['back'],'Cable row':['back'],'Seated Cable row':['back'],
  'Single Arm Cable Row (Neutral)':['back'],'Single Arm Cable Row (Pronated)':['back'],
  'Single Arm Cable Row (Underhand)':['back'],'Loaded Machine Row (Single Arm)':['back'],
  'Plate Loaded Machine Row (Both Arms)':['back'],'Landmine rows':['back'],'Shotgun Cable Row':['back'],
  'Lat Pulldown (Wide Grip)':['back'],'Lat Pulldown (Cable) - V-Grip':['back'],'V-Grip Lat Pulldowns':['back'],
  'Machine Lat Pulldown (weight loaded)':['back'],'Diverging Lat Pulldown Machine':['back'],
  'Single Arm Lat Pulldown':['back'],'Lat Rope Pushdown':['back'],'Lat Straight Bar Pushdown (Cable)':['back'],
  'Weighted Pull-Ups':['back','biceps'],'Weighted Chin-Ups':['back','biceps'],
  'Body weight dips (on dip bars)':['chest','triceps'],
  'Seated back extension':['back'],'Back extension':['back'],
  'Reverse Grip Cable Row':['back'],'Barbell Row':['back'],'Cleans':['back','shoulders'],
  // Shoulders
  'Machine Shoulder Press':['shoulders'],'Seated Dumbbell Shoulder Press':['shoulders'],
  'Seated Dumbbell Press':['shoulders'],'Bradford Press':['shoulders'],
  'Arnie Press':['shoulders'],'Smith Machine Shoulder Press (Behind the Neck)':['shoulders'],
  'Standing Military Press ':['shoulders'],'Standing Barbel Military Press':['shoulders'],
  'Cable Lateral Raise':['shoulders'],'Standing Dumbbell Lateral Raise':['shoulders'],
  'Seated Lateral Raise (Dumbbell)':['shoulders'],'Dumbbell Lateral Raise (Overhead)':['shoulders'],
  'Cable Face Pull (High)':['shoulders','back'],'Rear Delt Flyes (Dumbbell)':['shoulders'],
  'Rear Delt Flyes (Cable)':['shoulders'],'Rear Delt Flyes (Machine)':['shoulders'],
  'Plate Raise':['shoulders'],'Dumbbell front raises':['shoulders'],
  'Underhand Cable Front Raises (Chest Focus)':['shoulders','chest'],
  // Biceps
  'Dumbbell bicep curl':['biceps'],'Dumbbell curl':['biceps'],'Alternating Dumbbell Curl':['biceps'],
  'Alternating Dumbbell Hammer curl':['biceps'],'Dumbbell Hammer Curl':['biceps'],
  'Cable Curl':['biceps'],'Preacher Curl':['biceps'],'Seated bicep curl':['biceps'],
  'Incline Bench Curls':['biceps'],'Incline Bench Dumbbell Hammer Curl':['biceps'],
  'Rope Hammer Curl':['biceps'],'Cable Hammer Curl':['biceps'],'Reverse Grip Cable Curl':['biceps'],
  'Single Arm Cable Curl':['biceps'],'Dumbbell Spider Curl':['biceps'],
  'Seated Dumbbell Curl into OHP':['biceps','shoulders'],
  // Triceps
  'Tricep Rope Pushdown':['triceps'],'Tricep Cable Cross Body Pushdown':['triceps'],
  'Tricep cable overhead extension':['triceps'],'Rope Overhead Extension':['triceps'],
  'Tricep extension (bar)':['triceps'],'Seated e-z Bar Tricep Extension':['triceps'],
  'Single Cable Pushdown':['triceps'],'Single Arm Lat Pushdown':['triceps'],
  'Cable lat pushdown':['triceps'],'Machine Dips':['triceps','chest'],
  // Quads/Legs
  'Barbell Squat':['quads'],'Bulgarian Split Squat':['quads','glutes'],
  'Leg Press':['quads'],'Lying leg press machine':['quads'],'Leg Extension':['quads'],
  'Single Leg Extension':['quads'],'Sissy Squat':['quads'],'Jump Squats':['quads'],
  'Close Stance Goblet Squat':['quads'],'Dumbbell Sumo Squat':['quads','glutes'],
  'Dumbbell Backward Lunge':['quads','glutes'],'Kettlebell step-ups':['quads','glutes'],
  'Cable Spanish Squat Hold':['quads'],'Cable Rope RDL':['hamstrings','glutes'],
  // Hamstrings
  'Leg Curl':['hamstrings'],'Single Leg Curl':['hamstrings'],'Prone Leg Curls':['hamstrings'],
  'Hamstring curl':['hamstrings'],'Smith machine RDL':['hamstrings','glutes'],
  'Dumbbell RDL':['hamstrings','glutes'],'Romanian deadlift':['hamstrings','glutes'],
  'Single Leg Deadlift':['hamstrings','glutes'],
  // Glutes
  'Hip thrust':['glutes'],'Glute Bridge Hold':['glutes'],'Glute master':['glutes'],
  'Hip Abduction (Outer Thigh)':['glutes'],'Abduction (inner thigh)':['glutes'],
  'Cable abductors':['glutes'],'Cable kickbacks':['glutes'],'Cable Pull Through':['glutes','hamstrings'],
  // Calves
  'Standing Calf Raise':['calves'],'Seated Calf Raise':['calves'],
  'Single Leg Calf Raise':['calves'],'Single Standing Calf Raise':['calves'],
  // Abs/Core
  'Plank':['abs'],'Hollow hold':['abs'],'L-sit':['abs'],
};

const KEY_LIFTS = [
  {name:'Barbell Bench Press',  aliases:['Barbell Bench press','Bench Press (Dumbell)','Incline Barbell Bench Press','Incline Benchpress'], label:'Bench', muscle:'chest'},
  {name:'Barbell Deadlift',     aliases:['Deadlift','Smith Machine Deadlift'], label:'Deadlift', muscle:'back'},
  {name:'Barbell Row',          aliases:['Smith Machine Barbell Row','V-Grip Cable row','T-Bar Row'], label:'Row', muscle:'back'},
  {name:'Machine Shoulder Press',aliases:['Seated Dumbbell Shoulder Press','Bradford Press','Standing Military Press '], label:'Overhead Press', muscle:'shoulders'},
  {name:'Leg Press',            aliases:['Lying leg press machine','Bulgarian Split Squat'], label:'Leg Press / Squat', muscle:'quads'},
  {name:'Weighted Pull-Ups',    aliases:['Weighted Chin-Ups','Lat Pulldown (Wide Grip)','Lat Pulldown (Cable) - V-Grip'], label:'Pull-Up / Pulldown', muscle:'back'},
];

function getMuscleVolumeLast4Weeks(){
  const cutoff = Date.now() - 28*86400000;
  const vol = {};
  workouts.filter(w=>new Date(w.date)>=cutoff).forEach(w=>{
    w.exercises.forEach(ex=>{
      const muscles = MUSCLE_MAP[ex.name] || [];
      const sets = ex.sets.filter(s=>s.reps).length;
      muscles.forEach(m=>{ vol[m]=(vol[m]||0)+sets; });
    });
  });
  return vol;
}

function getLiftData(lift){
  // Find any session using this lift's name or aliases
  const names = new Set([lift.name, ...lift.aliases]);
  const sessions = [];
  workouts.forEach(w=>{
    w.exercises.filter(e=>names.has(e.name)).forEach(ex=>{
      let maxW=0, maxR=0;
      ex.sets.forEach(s=>{
        const wt=parseFloat(s.weight)||0, r=parseFloat(s.reps)||0;
        if(wt>maxW){maxW=wt;}
        if(r>maxR){maxR=r;}
      });
      if(maxW||maxR) sessions.push({date:w.date,weight:maxW,reps:maxR,orm:ormEpley(maxW,maxR)});
    });
  });
  sessions.sort((a,b)=>new Date(a.date)-new Date(b.date));
  return sessions;
}

function getExerciseBrief(name){
  // Return last session data and PR for quick display
  const hist = getExerciseHistory(name);
  if(!hist.length) return null;
  const last = hist[hist.length-1];
  const lastDate = new Date(last.date).toLocaleDateString('en-CA',{month:'short',day:'numeric'});
  const bestSet = last.sets.filter(s=>s.reps&&s.weight).sort((a,b)=>(parseFloat(b.weight)||0)-(parseFloat(a.weight)||0))[0];
  const pr = getExercisePR(name);
  return {lastDate, bestSet, pr, sessionCount: hist.length};
}

function getPrForRepRange(name, reps){
  if(!reps||reps<1) return null;
  const range = REP_RANGES.find(r=>reps>=r.min&&reps<=r.max);
  if(!range) return null;
  let best=null;
  workouts.forEach(w=>{
    w.exercises.filter(e=>e.name===name).forEach(ex=>{
      ex.sets.forEach(s=>{
        const wt=parseFloat(s.weight)||0, r=parseFloat(s.reps)||0;
        if(r>=range.min&&r<=range.max&&wt>0){
          if(!best||wt>best.weight) best={weight:wt,reps:r,date:w.date,rpe:s.rpe};
        }
      });
    });
  });
  return best?{...best,range:range.label}:null;
}


// ════════════════════════════════════════════
// ONBOARDING
// ════════════════════════════════════════════
function checkOnboarding(userName){
  // Show onboarding for brand new users (no workouts at all)
  const seen=DB.get('ob_seen_'+userName,false);
  if(!seen&&workouts.length===0){
    document.getElementById('onboarding').classList.remove('hidden');
    onboardingStep=0;
    showObStep(0);
  }
}
function showObStep(n){
  document.querySelectorAll('.ob-step').forEach((el,i)=>el.classList.toggle('active',i===n));
}
function obNext(){
  onboardingStep++;
  showObStep(onboardingStep);
}
function obFinish(){
  DB.set('ob_seen_'+currentUser,true);
  document.getElementById('onboarding').classList.add('hidden');
  startNewWorkout();
}

// ════════════════════════════════════════════
// HISTORY SEARCH + FILTER
// ════════════════════════════════════════════
function filterWorkouts(wos,q,filter){
  let results=[...wos].reverse().map((w,i)=>({w,ri:wos.length-1-i}));
  if(filter==='This week'){
    const monday=new Date();monday.setDate(monday.getDate()-(monday.getDay()||7)+1);monday.setHours(0,0,0,0);
    results=results.filter(({w})=>new Date(w.date)>=monday);
  } else if(filter==='This month'){
    const mo=new Date();mo.setDate(1);mo.setHours(0,0,0,0);
    results=results.filter(({w})=>new Date(w.date)>=mo);
  } else if(filter==='PRs'){
    results=results.filter(({w})=>w.prs&&w.prs.length);
  }
  if(q){
    const lq=q.toLowerCase();
    results=results.filter(({w})=>
      (w.name||'').toLowerCase().includes(lq)||
      w.exercises.some(e=>e.name.toLowerCase().includes(lq))||
      new Date(w.date).toLocaleDateString('en-CA',{month:'long',day:'numeric',year:'numeric'}).toLowerCase().includes(lq)
    );
  }
  return results;
}

// ════════════════════════════════════════════
// SMART PROGRESSIVE OVERLOAD IN TEMPLATES
// ════════════════════════════════════════════
function startFromTemplate(i){
  const t=templates[i];
  if(!t)return;
  // For each exercise in template, look up last session weights
  const exercises=t.exercises.map(e=>{
    const hist=getExerciseHistory(e.name);
    let sets=[{}];
    if(hist.length){
      const lastSets=hist[hist.length-1].sets.filter(s=>s.reps||s.weight);
      if(lastSets.length){
        // Apply +2.5kg progressive overload if RPE was easy/moderate last time
        const avgRpe=lastSets.filter(s=>s.rpe).map(s=>({easy:1,moderate:2,challenging:3,max_effort:4}[s.rpe]||0));
        const rpeAvg=avgRpe.length?avgRpe.reduce((a,b)=>a+b,0)/avgRpe.length:3;
        const bump=rpeAvg<=2.5?2.5:0; // only bump if not grinding
        sets=lastSets.map(s=>({
          reps:s.reps,
          weight:s.weight?(Math.round((parseFloat(s.weight)+bump)*4)/4):undefined,
          _progressed:bump>0&&s.weight
        }));
      }
    }
    return {...e,sets};
  });
  activeWorkout={name:t.name,startTime:Date.now(),exercises};
  nav('log');
}

// ════════════════════════════════════════════
// IN-SESSION MICRO COACHING
// ════════════════════════════════════════════
function updateMicroCoach(ei,si){
  const wo=activeWorkout;
  if(!wo) return;
  const ex=wo.exercises[ei];
  if(!ex||ex.type==='cardio') return;
  const completedSets=ex.sets.filter(s=>s.done&&s.reps&&s.weight);
  if(!completedSets.length) return;

  const hist=getExerciseHistory(ex.name);
  const lastSession=hist.length>=2?hist[hist.length-2]:null; // -2 because current session not saved yet

  let msg='';

  // Compare with last session
  if(lastSession){
    const lastCompleted=lastSession.sets.filter(s=>s.reps);
    const thisVol=completedSets.reduce((s,set)=>(parseFloat(set.reps)||0)*(parseFloat(set.weight)||0)+s,0);
    const lastVol=lastCompleted.reduce((s,set)=>(parseFloat(set.reps)||0)*(parseFloat(set.weight)||0)+s,0);
    const setsDiff=completedSets.length-lastCompleted.length;
    const volDiff=thisVol-lastVol;

    if(completedSets.length===lastCompleted.length&&volDiff>0){
      msg=`<strong>+${Math.round(volDiff)} ${wUnit()} volume</strong> vs last session on ${esc(ex.name)} — great progression.`;
    } else if(setsDiff>0){
      msg=`<strong>${completedSets.length} sets done</strong> — already ${setsDiff} more than last session on ${esc(ex.name)}.`;
    }
  }

  // RPE pattern warning
  const highRpe=completedSets.filter(s=>s.rpe==='max_effort').length;
  if(highRpe>=2&&completedSets.length>=2){
    msg=`<strong>High effort on ${esc(ex.name)}</strong> — consider dropping weight slightly for remaining sets to protect form.`;
  }

  // PR detection mid-set
  const maxW=Math.max(...completedSets.map(s=>parseFloat(s.weight)||0));
  const prCheck=getPrForRepRange(ex.name,parseInt(completedSets[completedSets.length-1].reps)||0);
  if(prCheck&&maxW>prCheck.weight){
    msg=`🏆 <strong>New PR on ${esc(ex.name)}!</strong> ${fmtW(maxW)} ${wUnit()} beats your previous ${prCheck.range} record.`;
  }

  microCoachMsg=msg;
  const bar=document.getElementById('micro-coach-bar');
  if(bar){
    bar.innerHTML=msg;
    bar.className='micro-coach'+(msg?' visible':'');
  }
}

// ════════════════════════════════════════════
// PLATEAU DETECTION
// ════════════════════════════════════════════
function detectPlateaus(){
  const plateaus=[];
  if(workouts.length<8) return plateaus;

  const exSessions={};
  workouts.forEach(w=>{
    w.exercises.forEach(ex=>{
      if(ex.type==='cardio') return;
      if(!exSessions[ex.name]) exSessions[ex.name]=[];
      const sets=ex.sets.filter(s=>s.reps&&s.weight);
      if(!sets.length) return;
      const maxW=Math.max(...sets.map(s=>parseFloat(s.weight)||0));
      const maxR=Math.max(...sets.map(s=>parseFloat(s.reps)||0));
      exSessions[ex.name].push({date:w.date,maxW,maxR,vol:sets.reduce((s,set)=>(parseFloat(set.reps)||0)*(parseFloat(set.weight)||0)+s,0)});
    });
  });

  Object.entries(exSessions).forEach(([name,sessions])=>{
    if(sessions.length<8) return;
    const last8=sessions.slice(-8);
    const weightRange=Math.max(...last8.map(s=>s.maxW))-Math.min(...last8.map(s=>s.maxW));
    const repRange=Math.max(...last8.map(s=>s.maxR))-Math.min(...last8.map(s=>s.maxR));
    // Plateau: weight variance < 5kg and rep variance < 3 over 8 sessions
    if(weightRange<5&&repRange<3){
      const fixes=['Try a different rep range (e.g. 3×5 instead of 3×10)','Add a variation (e.g. Incline instead of Flat)','Take a 1-week deload then come back heavier','Add a technique focus week with lighter weight'];
      const fix=fixes[Math.floor(Math.random()*fixes.length)];
      plateaus.push({name,sessions:last8.length,fix});
    }
  });
  return plateaus.slice(0,3);
}

// ════════════════════════════════════════════
// PROGRESS PHOTOS
// ════════════════════════════════════════════
function getPhotos(){
  return DB.get('photos_'+currentUser,[]);
}
function savePhoto(dataUrl,note){
  const photos=getPhotos();
  photos.push({date:new Date().toISOString(),dataUrl,note:note||''});
  // Keep last 30 photos
  if(photos.length>30) photos.splice(0,photos.length-30);
  DB.set('photos_'+currentUser,photos);
}
function deletePhoto(idx){
  const photos=getPhotos();
  photos.splice(idx,1);
  DB.set('photos_'+currentUser,photos);
  switchProgressTab('photos');
}

function renderProgressPhotos(){
  const photos=getPhotos();
  let html=`<div class="card mb-12">
    <div class="card-title mb-8">Progress photos</div>
    <div style="font-size:12px;color:var(--text3);margin-bottom:10px">Photos are stored locally on your device only.</div>
    <div class="photo-grid">
      <button class="photo-add-btn" onclick="openPhotoCapture()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
        Add photo
      </button>`;
  photos.slice().reverse().forEach((p,i)=>{
    const ri=photos.length-1-i;
    const dateStr=new Date(p.date).toLocaleDateString('en-CA',{month:'short',day:'numeric'});
    html+=`<div class="photo-thumb" onclick="viewPhoto(${ri})">
      <img src="${p.dataUrl}" alt="Progress photo">
      <div class="photo-thumb-date">${dateStr}</div>
    </div>`;
  });
  html+=`</div></div>`;
  if(photos.length>=2){
    html+=`<div class="card">
      <div class="card-title mb-4">Journey</div>
      <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px">
        ${photos.map((p,i)=>`<div style="flex-shrink:0;width:80px">
          <img src="${p.dataUrl}" style="width:80px;height:106px;object-fit:cover;border-radius:6px;border:1px solid var(--border)">
          <div style="font-size:9px;color:var(--text3);font-family:var(--mono);text-align:center;margin-top:3px">${new Date(p.date).toLocaleDateString('en-CA',{month:'short',day:'numeric'})}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }
  return html;
}

function openPhotoCapture(){
  const ml=document.getElementById('modal-layer');
  ml.innerHTML=`
  <div class="modal-bg open" id="photo-modal" onclick="if(event.target===this)closeModalBg(this)">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">Add progress photo</div>
      <div style="margin-bottom:12px">
        <input type="file" id="photo-file-input" accept="image/*" capture="environment" style="display:none" onchange="handlePhotoFile(this)">
        <button class="btn w-full mb-8" onclick="document.getElementById('photo-file-input').click()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
          Take or choose photo
        </button>
        <canvas id="photo-preview-canvas" style="display:none;width:100%;border-radius:var(--r2);margin-bottom:8px"></canvas>
        <input type="text" id="photo-note" placeholder="Note (optional, e.g. 'Week 8 front')" style="margin-bottom:8px">
      </div>
      <div class="flex gap-8">
        <button class="btn flex-1" onclick="closeModalAnim('photo-modal')">Cancel</button>
        <button class="btn btn-primary flex-1" id="save-photo-btn" style="display:none" onclick="confirmSavePhoto()">Save</button>
      </div>
    </div>
  </div>`;
}

function handlePhotoFile(input){
  const file=input.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=function(e){
    const img=new Image();
    img.onload=function(){
      const canvas=document.getElementById('photo-preview-canvas');
      if(!canvas) return;
      // Resize to max 800px on longest side
      const maxPx=800;
      let w=img.width,h=img.height;
      if(w>maxPx||h>maxPx){const r=maxPx/Math.max(w,h);w=Math.round(w*r);h=Math.round(h*r);}
      canvas.width=w;canvas.height=h;
      const ctx=canvas.getContext('2d');
      ctx.drawImage(img,0,0,w,h);
      canvas.style.display='block';
      const btn=document.getElementById('save-photo-btn');
      if(btn)btn.style.display='flex';
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
}

function confirmSavePhoto(){
  const canvas=document.getElementById('photo-preview-canvas');
  const note=document.getElementById('photo-note');
  if(!canvas) return;
  const dataUrl=canvas.toDataURL('image/jpeg',0.75);
  savePhoto(dataUrl,note?note.value:'');
  closeModalAnim('photo-modal');
  switchProgressTab('photos');
}

function viewPhoto(idx){
  const photos=getPhotos();
  const p=photos[idx];
  if(!p) return;
  const ml=document.getElementById('modal-layer');
  const dateStr=new Date(p.date).toLocaleDateString('en-CA',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  ml.innerHTML=`<div class="photo-viewer" onclick="closeModalBg(this)">
    <button class="photo-viewer-close" onclick="event.stopPropagation();this.closest('.photo-viewer').remove()">✕</button>
    <img src="${p.dataUrl}" onclick="event.stopPropagation()">
    <div class="photo-viewer-meta">${dateStr}${p.note?' · '+esc(p.note):''}</div>
    <button class="btn btn-danger mt-8" onclick="event.stopPropagation();if(confirm2())deletePhotoConfirm(${idx})">Delete</button>
  </div>`;
}
function deletePhotoConfirm(idx){
  showConfirm('Delete this photo?','This cannot be undone.','Delete','btn-danger',function(){
    deletePhoto(idx);
    const pv=document.querySelector('.photo-viewer');
    if(pv)pv.remove();
  });
}

// ════════════════════════════════════════════
// SHARE SESSION CARD
// ════════════════════════════════════════════
function openShareModal(idx){
  const w=workouts[idx];
  if(!w) return;
  const vol=calcVolume(w);
  const sets=countSets(w);
  const date=new Date(w.date).toLocaleDateString('en-CA',{weekday:'long',month:'long',day:'numeric'});

  const prLines=w.prs&&w.prs.length?w.prs.map(p=>`🏆 ${p}`).join('\n'):'';
  const exLines=w.exercises.map(ex=>{
    const topSets=ex.sets.filter(s=>s.reps&&s.weight).sort((a,b)=>(parseFloat(b.weight)||0)-(parseFloat(a.weight)||0)).slice(0,2);
    if(!topSets.length) return null;
    return `${ex.name}: ${topSets.map(s=>`${s.reps}×${fmtW(s.weight)}${wUnit()}`).join(', ')}`;
  }).filter(Boolean);

  const shareText=`${w.name||'Workout'} · ${date}\n${sets} sets · ${fmtVol(vol)} ${wUnit()} total volume\n\n${exLines.join('\n')}${prLines?'\n\n'+prLines:''}\n\nLogged with LiftLog 💪`;

  const ml=document.getElementById('modal-layer');
  ml.innerHTML=`
  <div class="modal-bg open" id="share-modal" onclick="if(event.target===this)closeModalBg(this)">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-title">Share session</div>
      <div class="share-preview">
        <div class="share-preview-title">${esc(w.name||'Workout')} ${w.prs&&w.prs.length?'<span class="pr-badge">PR</span>':''}</div>
        <div class="share-preview-meta">${date} · ${sets} sets · ${fmtVol(vol)} ${wUnit()}</div>
        ${w.exercises.map(ex=>{
          const top=ex.sets.filter(s=>s.reps&&s.weight).sort((a,b)=>(parseFloat(b.weight)||0)-(parseFloat(a.weight)||0)).slice(0,2);
          if(!top.length) return '';
          return `<div class="share-preview-ex">
            <div class="share-preview-ex-name">${esc(ex.name)}</div>
            <div class="share-preview-sets">${top.map(s=>`${s.reps}×${fmtW(s.weight)}${wUnit()}`).join(' · ')}</div>
          </div>`;
        }).join('')}
        ${prLines?`<div style="margin-top:8px;font-size:12px;color:var(--green)">${w.prs.map(p=>`🏆 ${esc(p)}`).join('<br>')}</div>`:''}
      </div>
      <div class="flex gap-8">
        <button class="btn flex-1" onclick="closeModalAnim('share-modal')">Close</button>
        <button class="btn btn-primary flex-1" onclick="copyShareText(${JSON.stringify(shareText).replace(/</g,'&lt;')})">Copy text</button>
      </div>
    </div>
  </div>`;
}

function copyShareText(text){
  navigator.clipboard.writeText(text).then(()=>{
    const btn=document.querySelector('#share-modal .btn-primary');
    if(btn){btn.textContent='Copied! ✓';btn.style.background='var(--green)';setTimeout(()=>{if(btn){btn.textContent='Copy text';btn.style.background='';}},2000);}
  }).catch(()=>{
    // Fallback
    const ta=document.createElement('textarea');
    ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);
  });
}

// ════════════════════════════════════════════
// USER PORTAL
// ════════════════════════════════════════════
function initUserPortal(){
  const grid=document.getElementById('user-grid');
  grid.innerHTML=Object.entries(USERS_META).map(([name,meta])=>{
    const wos=SEED_DATA[name]||[];
    const sets=wos.reduce((s,w)=>s+w.exercises.reduce((ss,e)=>ss+e.sets.length,0),0);
    return `<div class="user-card" onclick="selectUser('${name}')">
      <div class="user-avatar" style="background:${meta.bg};color:${meta.color}">${name.slice(0,2).toUpperCase()}</div>
      <div class="user-name">${name}</div>
      <div class="user-stats">${wos.length} sessions · ${sets} sets</div>
    </div>`;
  }).join('');
}
function selectUser(name){
  currentUser=name;
  document.getElementById('user-portal').classList.add('hidden');
  loadUserData();
  currentScreen='home';
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.screen==='home'));
  render();
  checkOnboarding(name);
}
function switchUser(){
  activeWorkout=null;editingWorkout=null;
  clearInterval(timerInterval);timerInterval=null;swReset();
  currentUser=null;
  document.getElementById('user-portal').classList.remove('hidden');
}

// ════════════════════════════════════════════
// BOOT
// ════════════════════════════════════════════
initUserPortal();
