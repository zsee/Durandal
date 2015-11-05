define(function () {
    var attachedCount = 0;

    var InnerViewModel = function () {

    };

    InnerViewModel.prototype.attached = function () {
        attachedCount++;
        console.log("InnerViewModel.attached - attachedCount:" + attachedCount);
    };

    InnerViewModel.prototype.detached = function () {
        attachedCount--;
        console.log("InnerViewModel.detached - attachedCount:" + attachedCount);
    };

    return InnerViewModel;
});