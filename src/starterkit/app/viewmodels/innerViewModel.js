define(function () {
    var attachedCount = 0;

    var InnerViewModel = function () {

    };

    InnerViewModel.attached = function () {
        attachedCount++;
        console.log("InnerViewModel.attached - attachedCount:" + attachedCount);
    };

    InnerViewModel.detached = function () {
        attachedCount--;
        console.log("InnerViewModel.detached - attachedCount:" + attachedCount);
    };

    return InnerViewModel;
});