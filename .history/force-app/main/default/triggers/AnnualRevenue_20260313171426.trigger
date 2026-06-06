trigger AnnualRevenue on Account (before insert) {
    if{trigger.isBefore}
}