from git_filter_repo import FilterRepo

def filter_commits(commit):
    if commit.author_name == b"JulianaAmoasei":
        return None

repo = FilterRepo()
repo.commit_callback = filter_commits
repo.run()
