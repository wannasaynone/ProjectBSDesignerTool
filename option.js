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
var commandOption = {

    command_T_T: [ // 選對象 +2Text
        "SetStatus",
        "AddStatus",
        "DealDamage",
        "GainBuff",
        "AddBuffAmount",
        "AddBuffAmountByTag",
        "AddBuffTime",
        "AddBuffTimeByTag",
        "BeginIf_Buff",
        "BeginIf_Skill",
        "BeginIf_HasBuffTag",
        "BeginIf_LastSkillTag",
        "AddShield",
        "TriggerBuff",
    ],

    command_T_O: [ // 選對象 +1Text
        "LockAddStatus",
        "AddActionIndex",
        "AddExtraAction"
    ],
    command_T: [ // 選對象
        "ForceDie",
        "Destroy",
        "Remember"
    ],

    command_Two: [ // 兩格
        "ReplaceSkill",
        "ShowVFX",
        "ShowVFXOnTarget"
    ],

    command_O: [ // 一格
        "AddDamage",
        "SetDamage",
        "BeginIf",
        "Chain",
        "CastSkill",
        "RandomCastSkill",
        "Wait",
        "PlaySFX"
    ],

    command_N: [ // 空
        "SetForceEndAction",
        "SetSkipCheckSP",
        "EndIf",
        "SetPlayAnimationNext",
        "ShowSkillFailed"
    ]
}
/* Command */

/* 選擇對象指令 */

var selectTarget = {
    selectTargetOptionSpace: [ // 沒有後續選項
        "Self",
        "LastSelected",
        "LastAttacked",
        "CurrentActor",
    ],
    selectTargetOptionST: [ // 兩格下拉參數 +1input
        "Select",
        "SelectOther",
    ],
    selectTargetOptionT: [ // 給一個輸入格就好
        "SkillLastSelected"
    ]
}
/* 選擇對象指令 */

/* 選擇對象指令參數 */
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

/* 選擇對象指令參數 */



