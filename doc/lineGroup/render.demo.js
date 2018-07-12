				<ProgressGroup 
                    render={function(own){
                        return (
                            <div>
                                <Progress percent={80} themes="loading" />
                                <Progress percent={60} themes="loading success" />
                                <Progress percent={40} themes="loading warn" />
                                <Progress percent={20} themes="loading error" />
                            </div>
                        )
                    }}
                />