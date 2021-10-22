/* Trigger Timing */

var TriggerTimingOption = [
    "OnBattleStarted",
    "OnTurnStarted",
    "OnActionStarted_Other",
    "OnActionStarted_Self",
    "OnAttackTaregtSelected_Other",
    "OnAttackTaregtSelected_Self",
    "OnStartToAttack_Other",
    "OnStartToAttack_Self",
    "OnDamageCalculated_Other",
    "OnDamageCalculated_Self",
    "OnStartToTakeDamage_Other",
    "OnStartToTakeDamage_Self",
    "OnDamageTaken_Other",
    "OnDamageTaken_Self",
    "OnDamageDealed_Other",
    "OnDamageDealed_Self",
    "OnBeAttackedEnded_Other",
    "OnBeAttackedEnded_Self",
    "OnAttackEnded_Other",
    "OnAttackEnded_Self",
    "OnDied_Other",
    "OnDied_Self",
    "OnStartToEndAction_Other",
    "OnStartToEndAction_Self",
    "OnStartToEndTurn",
    "OnBattleEnded",
    "OnActived",
    "OnDeactived"
]

/* Trigger Timing */

/* Command */

var commandOption = [
    "SetStatus",
    "AddStatus",
    "DealDamage",
    "AddDamage",
    "SetDamage",
    "SetForceEndAction",
    "SetSkipCheckSP",
    "GainBuff",
    "AddBuffAmount",
    "AddBuffAmountByTag",
    "AddBuffTime",
    "AddBuffTimeByTag",
    "BeginIf",
    "BeginIf_Buff",
    "BeginIf_Skill",
    "BeginIf_HasBuffTag",
    "BeginIf_LastSkillTag",
    "EndIf",
    "AddShield",
    "Chain",
    "ReplaceSkill",
    "CastSkill",
    "RandomCastSkill",
    "ForceDie",
    "Destroy",
    "LockAddStatus",
    "AddActionIndex",
    "AddExtraAction",
    "Remember",
    "TriggerBuff",
    "SetPlayAnimationNext",
    "ShowSkillFailed",
    "ShowVFX",
    "Wait",
    "ShowVFXOnTarget",
    "PlaySFX"
]

var commandOption

/* Command */

/* 選擇對象指令 */

var selectTargetOptionSpace = [ // 沒有後續選項
    "Self",
    "LastSelected",
    "LastAttacked",
    "CurrentActor",
];

var selectTargetOptionST = [ // 兩格下拉參數
    "Select",
    "SelectOther",
]

var selectTargetOptionT = [ // 給一個輸入格就好
    "SkillLastSelected"
]

var optionInSelectTargetOptionOne = [ // 下拉兩格參數第一格
    "SameSide",
    "Opponent",
    "All"
]

var optionInSelectTargetOptionTwo = [ // 下拉兩格參數第二格
    "Manual",
    "Random",
    "HighestAttack",
    "HighestDefense",
    "HighestSpeed",
    "LowestAttack",
    "LowestDefense",
    "LowestSpeed",
    "RandomByHatred"
]

/* 選擇對象指令 */



